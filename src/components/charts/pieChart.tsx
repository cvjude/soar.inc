import * as d3 from 'd3';
import { FC, useEffect, useRef, useState } from 'react';
import { debounce } from 'utils/helpers';
import { ExpenseStaticsticsData } from 'utils/types';

interface PieChartProps {
  data?: ExpenseStaticsticsData[];
}

const colors = [
  'text-dark-blue',
  'text-dark-orange',
  'text-dark-500',
  'text-biro-blue',
];

export const PieChart: FC<PieChartProps> = ({ data }) => {
  const ref = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState(300);

  const normalizedData = (data || []).map((d, idx) => ({
    ...d,
    class: `fill-current ${colors[idx % colors.length]}`,
  }));

  const updateSize = debounce(() => {
    setTimeout(() => {
      if (containerRef.current) {
        setSize(containerRef.current.clientWidth);
      }
    }, 0);
  }, 200);

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const radius = size / 2;
    const minVal = d3.min(normalizedData, (d) => d.value) || 0;
    const maxVal = d3.max(normalizedData, (d) => d.value) || 100;

    const scale = d3.scaleLinear().domain([maxVal, minVal]).range([0.7, 0.9]);

    const totalDegrees = 360;
    const firstSliceDegrees = (normalizedData[0]?.value / 100) * totalDegrees;
    const firstSliceCenter = firstSliceDegrees / 2;
    const rotation = firstSliceCenter;

    const g = svg
      .attr('width', size)
      .attr('height', size)
      .append('g')
      .attr(
        'transform',
        `translate(${size / 2}, ${size / 2 - 20}) rotate(${-rotation})`,
      );

    const pie = d3
      .pie<any>()
      .value((d) => d.value)
      .sort(null);
    const arc = d3
      .arc<any>()
      .innerRadius(0)
      .outerRadius(radius * 0.95);

    const arcs = pie(normalizedData);

    g.selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('class', (d) => d.data.class)
      .style('stroke', '#fff')
      .style('stroke-width', 2)
      .attr('transform', (d) => {
        const [x, y] = arc.centroid(d);
        const scaleFactor = scale(d.data.value);
        return `translate(${x * 0.05}, ${y * 0.05}) scale(${scaleFactor})`;
      })
      .attr('d', arc)
      .each(function (this: any) {
        this._current = { startAngle: 0, endAngle: 0 };
      })
      .transition()
      .duration(1000)
      .ease(d3.easeCubicOut)
      .attrTween('d', function (d) {
        const interpolate = d3.interpolate(
          (this as SVGPathElement & { _current: any })._current,
          d,
        );
        (this as SVGPathElement & { _current: any })._current = interpolate(1);
        return function (t) {
          return arc(interpolate(t)) as string;
        };
      });

    const textGroups = g
      .selectAll('.text-group')
      .data(arcs)
      .enter()
      .append('g')
      .attr('class', 'text-group')
      .attr('transform', (d) => {
        const [x, y] = arc.centroid(d);
        return `translate(${x}, ${y})`;
      })
      .style('opacity', 0);

    textGroups
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.3em')
      .attr('class', 'fill-white text-xs font-bold')
      .text((d) => `${d.data.value}%`);

    textGroups
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1em')
      .attr('class', 'fill-white text-xs')
      .text((d) => d.data.label);

    textGroups.transition().delay(800).duration(500).style('opacity', 1);
  }, [data, size]);

  return (
    <div ref={containerRef} className="w-full h-full flex-1">
      <svg ref={ref} className="w-full h-full" />
    </div>
  );
};

export default PieChart;

export const PieChartSkeleton: FC = () => {
  return (
    <div className="w-full h-full flex-1 flex items-center justify-center">
      <div className="w-[80%] aspect-square bg-gray-200 rounded-full animate-pulse" />
    </div>
  );
};
