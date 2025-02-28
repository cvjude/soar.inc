import * as d3 from 'd3';
import React, { useEffect, useRef, useCallback } from 'react';
import { formatAmount } from 'utils/helpers';
import { WeeklyActivityData } from 'utils/types';

interface BarChartProps {
  data?: WeeklyActivityData[];
}

export const BarChart: React.FC<BarChartProps> = ({ data = [] }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const drawChart = useCallback(() => {
    if (!chartRef.current || !data.length) return;

    const parent = chartRef.current;
    const width = parent.clientWidth;
    const height = parent.clientHeight;
    const margin = { top: 30, right: 10, bottom: 30, left: 25 };
    const barWidth = width > 640 ? 15 : 7;
    const barSpacing = width > 640 ? 20 : 10;
    const rounded = barWidth / 2;
    const yAxisTicks = width > 640 ? 6 : 4;
    const xAisxTickOffset = width > 640 ? -25 : -10;

    d3.select(parent).select('svg').remove();

    const svg = d3
      .select(parent)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'none');

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.day))
      .range([margin.left, width - margin.right])
      .padding(0.5);

    const yMax = d3.max(data, (d) => Math.max(d.deposit, d.withdraw)) || 1000;

    const yScale = d3
      .scaleLinear()
      .domain([0, yMax])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(
        d3
          .axisLeft(yScale)
          .ticks(yAxisTicks)
          .tickSize(-width + margin.left + margin.right),
      )
      .selectAll('text');

    svg.selectAll('.domain').remove();
    svg.selectAll('.tick line').attr('class', 'stroke-current text-light-grey');

    const tooltip = d3.select(tooltipRef.current);

    const showTooltip = (event: MouseEvent, d: WeeklyActivityData) => {
      const tooltipWidth = 120;
      const tooltipHeight = 50;
      const offsetX = event.clientX;
      const offsetY = event.clientY;

      let left = offsetX + 10;
      let top = offsetY - tooltipHeight - 10;

      if (left + tooltipWidth > window.innerWidth) {
        left = offsetX - tooltipWidth - 10;
      }
      if (top < 10) {
        top = offsetY + 20;
      }

      tooltip
        .style('opacity', 1)
        .style('left', `${left}px`)
        .style('top', `${top}px`)
        .html(
          `<div class="p-2 text-sm bg-white shadow-lg rounded-md text-gray-800">
             <strong>${d.day}</strong> <br />
             <p>Deposit ${formatAmount(d.deposit.toString())}</p>
             <p>Withdraw ${formatAmount(d.withdraw.toString())}</p>
           </div>`,
        );
    };

    const hideTooltip = () => {
      tooltip.style('opacity', 0);
    };

    svg
      .selectAll('.bar.deposit')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar deposit')
      .attr('x', (d) => xScale(d.day)! - barWidth - barSpacing / 4)
      .attr('y', height - margin.bottom)
      .attr('width', barWidth)
      .attr('height', 0)
      .attr('class', 'fill-current text-dark-500')
      .attr('rx', rounded)
      .attr('ry', rounded)
      .on('mouseover', (event, d) => showTooltip(event, d))
      .on('mouseout', hideTooltip)
      .transition()
      .duration(800)
      .attr('y', (d) => yScale(d.deposit))
      .attr('height', (d) => height - margin.bottom - yScale(d.deposit));

    svg
      .selectAll('.bar.withdraw')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar withdraw')
      .attr('x', (d) => xScale(d.day)! + barSpacing / 4)
      .attr('y', height - margin.bottom)
      .attr('width', barWidth)
      .attr('height', 0)
      .attr('class', 'fill-current text-biro-blue')
      .attr('rx', rounded)
      .attr('ry', rounded)
      .on('mouseover', (event, d) => showTooltip(event, d))
      .on('mouseout', hideTooltip)
      .transition()
      .duration(800)
      .attr('y', (d) => yScale(d.withdraw))
      .attr('height', (d) => height - margin.bottom - yScale(d.withdraw));

    const xAxis = svg
      .append('g')
      .attr(
        'transform',
        `translate(${xAisxTickOffset},${height - margin.bottom + 10})`,
      )
      .call(d3.axisBottom(xScale).tickSize(0));

    xAxis.selectAll('text').attr('text-anchor', 'middle');

    svg.selectAll('.domain').remove();
    svg.selectAll('text').attr('class', 'bar-chart__axis_text');

    const legendData = [
      { label: 'Deposit', class: 'fill-current text-biro-blue' },
      { label: 'Withdraw', class: 'fill-current text-dark-500' },
    ];

    const legend = svg
      .append('g')
      .attr('transform', `translate(${width - 200}, 0)`);

    legend
      .selectAll('circle')
      .data(legendData)
      .enter()
      .append('circle')
      .attr('cx', (_, i) => i * 100)
      .attr('cy', 5)
      .attr('r', 5)
      .attr('class', (d) => d.class);

    legend
      .selectAll('text')
      .data(legendData)
      .enter()
      .append('text')
      .attr('x', (_, i) => i * 100 + 10)
      .attr('y', 10)
      .text((d) => d.label)
      .attr('font-size', '12px')
      .attr('class', 'fill-current text-pale-blue-500 text-xs md:text-sm');
  }, [data]);

  useEffect(() => {
    drawChart();

    const handleResize = () => {
      drawChart();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawChart]);

  return (
    <div className="relative w-full h-full">
      <div ref={chartRef} className="w-full h-full" />
      <div
        ref={tooltipRef}
        className="fixed pointer-events-none opacity-0"
      ></div>
    </div>
  );
};

export const BarChartSkeleton: React.FC = () => {
  return (
    <div className="relative w-full h-full animate-pulse">
      <div className="flex gap-3 justify-end">
        <div className="h-1 rounded bg-gray-200 w-[50px] md:w-[100px]"></div>
        <div className="h-1 rounded bg-gray-200 w-[50px] md:w-[100px]"></div>
      </div>
      <div className="grid grid-rows-5 w-full h-full items-end relative">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={`loader_${index}`} className="flex gap-3">
            <div className="h-1 rounded bg-gray-200 w-[100px]"></div>{' '}
            <div className="w-full h-[1px] bg-light-grey"></div>
          </div>
        ))}

        <div className="absolute w-full h-full flex pl-[30%]">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={`loader_${index}`}
              className="flex gap-2 md:gap-3 w-full h-full items-end"
            >
              <div className="h-[90%] w-2 rounded bg-gray-200"></div>
              <div className="h-[60%] w-2 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
