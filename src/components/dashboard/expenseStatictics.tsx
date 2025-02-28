import { FETCH_EXPENSE_STATISTICS } from 'constants/index';
import { useQuery } from '@tanstack/react-query';
import { PieChart, PieChartSkeleton } from 'components/charts/pieChart';
import { DashbardTitleSection } from 'components/dashbardTitleSection';
import { fetchExpenseStatistics } from 'utils/clientSideFuns/queries';

export const ExpenseStatictics = () => {
  const { data, isLoading } = useQuery({
    queryKey: [FETCH_EXPENSE_STATISTICS],
    queryFn: fetchExpenseStatistics,
  });

  return (
    <div>
      <DashbardTitleSection title="Expense Statistics" />

      <div className="lg:bg-white lg:rounded-[25px] lg:shadow lg:p-6 aspect-[350/322] lg:min-w-auto max-w-full lg:max-h-[436px] lg:h-[24vw] flex">
        {isLoading ? <PieChartSkeleton /> : <PieChart data={data} />}
      </div>
    </div>
  );
};
