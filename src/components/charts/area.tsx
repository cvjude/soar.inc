import * as d3 from 'd3';
import React, { useEffect, useRef, useCallback } from 'react';
import { debounce } from 'utils/helpers';
import { HistoryBalanceData } from 'utils/types';

interface AreaChartProps {
  data?: HistoryBalanceData[];
}

export const AreaChart: React.FC<AreaChartProps> = ({ data = [] }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const drawChart = useCallback(() => {
    if (!chartRef.current || !data.length) return;

    const parent = chartRef.current;
    const width = parent.clientWidth;
    const height = parent.clientHeight;
    const margin = { top: 30, right: 10, bottom: 40, left: 50 };

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
      .domain(data.map((d) => d.month))
      .range([margin.left, width - margin.right])
      .padding(0);

    const yMax = d3.max(data, (d) => d.balance) || 1000;
    const yScale = d3
      .scaleLinear()
      .domain([0, yMax])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg
      .selectAll('.x-line')
      .data(xScale.domain())
      .enter()
      .append('line')
      .attr('class', 'x-line')
      .attr('x1', (d: string) => (xScale(d) ?? 0) + xScale.bandwidth() / 2)
      .attr('y1', height - margin.bottom)
      .attr('x2', (d: string) => (xScale(d) ?? 0) + xScale.bandwidth() / 2)
      .attr('y2', margin.top)
      .attr('class', 'stroke-current text-pale-blue-50')
      .attr('stroke-dasharray', '4')
      .attr('stroke-width', 1);

    const yTicks = yScale.ticks(5);
    svg
      .selectAll('.y-line')
      .data(yTicks)
      .enter()
      .append('line')
      .attr('class', 'y-line')
      .attr('x1', margin.left)
      .attr('y1', (d) => yScale(d))
      .attr('x2', width - margin.right)
      .attr('y2', (d) => yScale(d))
      .attr('class', 'stroke-current text-pale-blue-50')
      .attr('stroke-dasharray', '4')
      .attr('stroke-width', 1);

    const gradient = svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'area-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    gradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', 'rgba(45, 96, 255, 0.25)');
    gradient
      .append('stop')
      .attr('offset', '40%')
      .attr('stop-color', 'rgba(45, 96, 255, 0.2)');
    gradient
      .append('stop')
      .attr('offset', '70%')
      .attr('stop-color', 'rgba(45, 96, 255, 0.1)');
    gradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', 'rgba(45, 96, 255, 0)');

    const area = d3
      .area<HistoryBalanceData>()
      .x((d) => (xScale(d.month) ?? 0) + xScale.bandwidth() / 2)
      .y0(yScale(0))
      .y1((d) => yScale(d.balance))
      .curve(d3.curveMonotoneX);

    svg
      .append('g')
      .append('path')
      .data([data])
      .attr('class', 'area')
      .attr('d', area)
      .attr('fill', 'url(#area-gradient)');

    const line = d3
      .line<HistoryBalanceData>()
      .x((d) => (xScale(d.month) ?? 0) + xScale.bandwidth() / 2)
      .y(() => yScale(0))
      .curve(d3.curveMonotoneX);

    const linePath = svg
      .append('g')
      .append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#1814F3')
      .attr('stroke-width', 3);

    linePath
      .transition()
      .duration(1000)
      .ease(d3.easeCubicOut)
      .attr(
        'd',
        line.y((d) => yScale(d.balance)),
      );

    const xAxis = svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    xAxis
      .selectAll('text')
      .attr('class', 'bar-chart__axis_text')
      .attr('text-anchor', 'middle');

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale))
      .selectAll('text')
      .attr('class', 'bar-chart__axis_text');
  }, [data]);

  useEffect(() => {
    drawChart();

    const handleResize = debounce(() => {
      drawChart();
    }, 200);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawChart]);

  return <div ref={chartRef} className="relative w-full h-full" />;
};

export const AreaChartSkeleton: React.FC = () => {
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

        <div className="absolute w-full h-full flex pl-[20%] items-end">
          <div className="w-full h-[60%] bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};
