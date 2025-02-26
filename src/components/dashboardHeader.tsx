import { FC } from 'react';
import classNames from 'classnames';

interface DashboardHeaderProps {
  currentPage: string;
}

export const DashboardHeader: FC<DashboardHeaderProps> = ({ currentPage }) => {
  return (
    <header className={classNames('z-10 top-0 w-full absolute left-0')}>
      <div
        className={classNames(
          'flex justify-between z-10 top-0 w-full container py-4',
        )}
      >
        <h1 className="text-lg font-semibold">{currentPage}</h1>

        <div className="flex items-center gap-6"></div>
      </div>
    </header>
  );
};
