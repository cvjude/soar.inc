/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import classNames from 'classnames';
import { DashboardHeader } from 'components/dashboardHeader';
import { SideNav } from 'components/sideNav';
import { links } from 'constants/sideNavLinks';
import { useAppDispatch } from 'hooks/reduxHooks';
import useMediaQuery from 'hooks/useMediaQuery';

export const DashboardLayout = ({
  className,
}: {
  title?: string;
  className?: string;
}) => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState('');

  const pageMap = useMemo(() => {
    return (
      links.reduce((acc, cur) => ({ ...acc, [cur.href]: cur.title }), {}), []
    );
  }, []);

  useEffect(() => {
    const pagePath = pathname.split('/')[2] || '';

    const pageName = `/dashboard${pagePath ? `/${pagePath}` : ''}`;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = (e: any, page: string): void => {
    closeNav();

    // update current page
  };

  const [open, setOpen] = useState(!isMobile);
  const openNav = () => {
    if (isMobile) setOpen(true);
  };

  const closeNav = () => {
    if (isMobile) setOpen(false);
  };

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isMobile]);

  return (
    <main className="flex justify-center items-start h-full w-screen relative z-0">
      <aside
        className={classNames(
          'sticky transition-all duration-200 overflow-y-scroll lg:overflow-visible w-14 lg:w-64 h-screen top-0 flex-shrink-0 z-0',
          {
            'w-64': open,
            'w-14': !open,
          },
        )}
      >
        <div className="z-0 relative w-full h-full" tabIndex={-1}>
          {!open && (
            <div
              className="absolute w-full h-screen inset-0 z-50 cursor-pointer"
              onClick={openNav}
            ></div>
          )}
          <SideNav closeNav={onClick} open={open} />
        </div>
      </aside>

      <div
        className={classNames(
          'w-[calc(100vw-16rem)] h-screen fixed lg:hidden bg-[rgba(0,0,0,0.2)] right-0',
          {
            'z-40 visible': open,
            'z-0 invisible': !open,
          },
        )}
        onClick={closeNav}
      ></div>

      <section className="flex flex-grow overflow-hidden min-h-screen z-0">
        <div className="flex flex-col flex-grow lg:w-full relative w-[calc(100vw-3.5rem)] flex-shrink-0 mx-auto pt-16">
          <DashboardHeader currentPage={currentPage} />
          <div className={classNames('container  mx-auto !px-1', className)}>
            <div className="bg-[rgba(0,0,0,0.08)] min-h-[calc(100vh-100px)] rounded-xl flex flex-col p-6 mb-5">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
