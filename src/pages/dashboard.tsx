import { BalanceHistory } from 'components/dashboard/balanceHistory';
import { ExpenseStatictics } from 'components/dashboard/expenseStatictics';
import { MyCards } from 'components/dashboard/myCards';
import { QuikTransfer } from 'components/dashboard/quickTransfer';
import { RecentTransactions } from 'components/dashboard/recentTransactions';
import { WeeklyActivity } from 'components/dashboard/weeklyActivity';
import { ToastContainer } from 'react-toastify';

export const Dashboard = () => {
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col w-full gap-10">
        <div className="element-gap grid xl:grid-cols-3">
          <MyCards />
          <RecentTransactions />
        </div>

        <div className="element-gap grid xl:grid-cols-3">
          <WeeklyActivity />
          <ExpenseStatictics />
        </div>

        <div className="element-gap grid xl:grid-cols-5">
          <QuikTransfer />
          <BalanceHistory />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
