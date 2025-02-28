import { FETCH_WEEKLY_ACTIVITY } from 'constants/index';
import { useQuery } from '@tanstack/react-query';
import { BarChart, BarChartSkeleton } from 'components/charts/bar';
import { DashbardTitleSection } from 'components/dashbardTitleSection';
import { fetchWeeklyActivity } from 'utils/clientSideFuns/queries';

export const WeeklyActivity = () => {
  const { data, isLoading } = useQuery({
    queryKey: [FETCH_WEEKLY_ACTIVITY],
    queryFn: fetchWeeklyActivity,
  });

  return (
    <div className="col-span-3 xl:col-span-2 h-full flex flex-col flex-1">
      <DashbardTitleSection title="Weekly Activity" />

      <div className="lg:bg-white lg:rounded-[25px] lg:shadow lg:p-6 min-w-[265px] min-h-[200px] md:min-h-[300px] lg:min-h-[unset] max-w-full lg:max-h-[436px] lg:h-[24vw]">
        {isLoading ? <BarChartSkeleton /> : <BarChart data={data} />}
      </div>
    </div>
  );
};
