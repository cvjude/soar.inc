import { FETCH_TRANSACTION_DATA } from 'constants/index';
import { useQuery } from '@tanstack/react-query';
import { DashbardTitleSection } from 'components/dashbardTitleSection';
import {
  RecentTransaction,
  RecentTransactionLoader,
} from 'components/recentTransaction';
import { fetchRecentTransactions } from 'utils/clientSideFuns/queries';

export const RecentTransactions = () => {
  const { data, isLoading } = useQuery({
    queryKey: [FETCH_TRANSACTION_DATA, { page: 1, limit: 3 }],
    queryFn: fetchRecentTransactions,
  });

  return (
    <div>
      <DashbardTitleSection title="Recent Transaction" />

      <div className="lg:bg-white lg:rounded-[25px] lg:shadow lg:p-6 lg:aspect-[350/235] flex flex-col justify-between min-w-[265px] lg:min-w-auto gap-4 lg:gap-2">
        {isLoading
          ? [...Array(3)].map((_, index) => (
              <RecentTransactionLoader key={`recent_transactions_${index}`} />
            ))
          : data?.map((transaction) => (
              <RecentTransaction
                transaction={transaction}
                key={transaction.id}
              />
            ))}
      </div>
    </div>
  );
};
