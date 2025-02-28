import { FETCH_BALANCE_HISTORY } from 'constants/index';
import { useQuery } from '@tanstack/react-query';
import { AreaChart, AreaChartSkeleton } from 'components/charts/area';
import { DashbardTitleSection } from 'components/dashbardTitleSection';
import { fetchBalanceHistory } from 'utils/clientSideFuns/queries';

export const BalanceHistory = () => {
  const { data, isLoading } = useQuery({
    queryKey: [FETCH_BALANCE_HISTORY],
    queryFn: fetchBalanceHistory,
  });

  return (
    <div className="col-span-5 xl:col-span-3 h-full flex flex-col">
      <DashbardTitleSection title="Balance History" />
      <div className="element-gap flex w-full flex-1 lg:bg-white lg:rounded-[25px] lg:shadow-btn lg:p-6 min-h-[300px] md:min-h-auto max-h-[387px]">
        {isLoading ? <AreaChartSkeleton /> : <AreaChart data={data} />}
      </div>
    </div>
  );
};
