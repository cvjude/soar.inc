import { FC } from 'react';
import classNames from 'classnames';
import { SearchBar } from './searchBar';
import { Link } from 'react-router';
import { Gear } from 'assets/gear';
import { Bell } from 'assets/bell';
import { useUser } from 'contexts/userContext';
import { Menu } from 'assets/menu';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface DashboardHeaderProps {
  currentPage: string;
  openNav: () => void;
}

export const DashboardHeader: FC<DashboardHeaderProps> = ({
  currentPage,
  openNav,
}) => {
  const { user } = useUser();

  return (
    <header
      className={classNames(
        'z-10 top-0 w-full absolute left-0 h-[140px] lg:h-[100px] bg-white flex flex-col justify-center',
      )}
    >
      <nav
        className={classNames(
          'flex justify-between z-10 top-0 container mx-auto px-6 lg:h-full items-center',
        )}
      >
        <button onClick={openNav} className="lg:hidden">
          <Menu className="fill-current text-dark-blue w-6 h-6" />
        </button>

        <AnimatePresence mode="wait">
          <motion.h1
            key={currentPage}
            className="font-semibold text-xl lg:text-3xl text-dark-blue"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            {currentPage}
          </motion.h1>
        </AnimatePresence>

        <div className="flex items-center gap-6">
          <div className="hidden lg:block">
            <SearchBar placeholder="Search for something" />
          </div>

          <Link
            to="/settings"
            className="h-[50px] w-[50px] hidden lg:flex items-center justify-center bg-pale-blue-100 rounded-[50%] "
          >
            <Gear className="fill-current text-pale-blue-500 w-6 h-6" />
          </Link>

          <div className="h-[50px] w-[50px] hidden lg:flex items-center justify-center bg-pale-blue-100 rounded-[50%] ">
            <Bell className="fill-current text-biro-blue w-6 h-6" />
          </div>

          <div className="h-[35px] w-[35px] lg:h-[60px] lg:w-[60px] flex items-center justify-center rounded-[50%]">
            <img src={user?.picture} alt="Profile picture" />
          </div>
        </div>
      </nav>

      <div className="block lg:hidden px-6 mx-auto container mt-5">
        <SearchBar placeholder="Search for something" />
      </div>
    </header>
  );
};
