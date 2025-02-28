import { links } from 'constants/sideNavLinks';
import classNames from 'classnames';
import { DashboardHeader } from 'components/dashboardHeader';
import { SideNav } from 'components/sideNav';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from 'hooks/useMediaQuery';
import { useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation } from 'react-router';

const DashboardLayout = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState('');
  const [open, setOpen] = useState(!isMobile);
  const [mainStyles, setMainStyles] = useState({
    width: '100vw',
    overflowX: 'auto',
  });

  // This is just for other developers who like to press the button to resize quickly
  // Normally this won't be need for just regular users
  // And esther egg of some sorts
  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth >= 1024 ? '100vw' : 'calc(100vw + 250px)';
      setMainStyles({
        width,
        overflowX: 'auto',
      });
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handletransitionEnd = () => {
    setMainStyles({ ...mainStyles, overflowX: 'hidden' });
  };

  const pageMap = useMemo<{ [key: string]: string }>(() => {
    return links.reduce(
      (acc, cur) => ({ ...acc, [cur.href]: cur.topBarTitle || cur.title }),
      {},
    );
  }, []);

  useEffect(() => {
    const pagePath = pathname.split('/')[2] || '';
    setCurrentPage(pageMap[pagePath] || 'Overview');
  }, []);

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isMobile]);

  const openNav = () => {
    if (isMobile) setOpen(true);
  };

  const closeNav = () => {
    if (isMobile) setOpen(false);
  };

  const onClick = (page: string): void => {
    closeNav();

    setCurrentPage(page);
  };

  return (
    <main
      className={classNames(
        'dash-layout__main flex justify-center items-start h-screen relative z-0 transition-transform duration-200',
        {
          'translate-x-0': open,
          '-translate-x-[250px]': !open,
        },
      )}
      onTransitionEnd={handletransitionEnd}
      style={mainStyles as React.CSSProperties}
    >
      <aside
        className={classNames(
          'sticky overflow-y-scroll lg:overflow-visible w-[250px] h-screen top-0 flex-shrink-0 z-0 border-r border-pale-blue-300',
        )}
      >
        <div className="z-0 relative w-full h-full" tabIndex={-1}>
          <SideNav closeNav={onClick} />
        </div>
      </aside>

      <section className="flex flex-grow overflow-hidden min-h-screen z-0 relative">
        <div
          className={classNames(
            'w-screen h-screen absolute lg:hidden bg-[rgba(0,0,0,0.2)] right-0',
            {
              'z-40 visible': open,
              'z-0 invisible': !open,
            },
          )}
          role="button"
          tabIndex={0}
          aria-label="Close navigation menu"
          onClick={closeNav}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              closeNav();
            }
          }}
        ></div>

        <div className="flex flex-col flex-grow lg:w-full relative w-[calc(100vw-3.5rem)] flex-shrink-0 mx-auto pt-[140px] lg:pt-[100px] lg:bg-pale-blue-100">
          <DashboardHeader currentPage={currentPage} openNav={openNav} />
          <div className="container mx-auto">
            <div className="min-h-[calc(100vh-140px)] lg:min-h-[calc(100vh-100px)] flex flex-col p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
