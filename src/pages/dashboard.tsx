import { MyCards } from 'components/dashboard/myCards';
import { RecentTransactions } from 'components/dashboard/recentTransactions';
import { ToastContainer } from 'react-toastify';

export const Dashboard = () => {
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col w-full gap-10">
        <div className="grid xl:grid-cols-3 gap-5 xl:gap-8">
          <MyCards />
          <RecentTransactions />
        </div>

        <div className="flex flex-col md:flex-row gap-10"></div>

        <div className="flex flex-col md:flex-row gap-10"></div>
      </div>
    </>
  );
};

export default Dashboard;
