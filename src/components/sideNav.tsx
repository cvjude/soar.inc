import { Link, NavLink } from 'react-router';
import classnames from 'classnames';
import { links } from 'constants/sideNavLinks';
import { Ilinks } from 'utils/types';
import { useEffect } from 'react';

export const SideNav = ({ closeNav }: { closeNav: (page: string) => void }) => {
  useEffect(() => {
    updateSliderPosition();
  }, []);

  const updateSliderPosition = (idx?: string) => {
    const activeNav = document.querySelector('.nav-link__active');
    const navIndex = idx || activeNav?.getAttribute('data-navIndex');
    const slider = document.querySelector('.nav__slider') as HTMLElement;

    if (slider) {
      slider.style.top = `${Number(navIndex?.split('_')[1]) * 60}px`;
    }
  };

  return (
    <aside className="relative z-40 h-screen bg-primary-dark flex flex-col items-center">
      <div className="w-40 h-[100px]">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>

      <nav className="w-full flex justify-center relative">
        <ul className="flex flex-col">
          {links.map((item: Ilinks, idx: number) => {
            return (
              <li
                key={`${item.title}-${idx}`}
                className="h-[60px] flex items-center"
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    classnames('nav-link ml-5', {
                      'nav-link__active': isActive,
                    })
                  }
                  onClick={() => {
                    updateSliderPosition(`${item.title}_${idx}`);
                    setTimeout(
                      () => closeNav(item.topBarTitle || item.title),
                      400,
                    );
                  }}
                  data-navIndex={`${item.title}_${idx}`}
                  key={`${item.title}-${idx}`}
                >
                  {({ isActive }) => (
                    <p
                      className={classnames('flex items-center gap-2.5', {
                        'text-dark-500': isActive,
                        'text-dark-300': !isActive,
                      })}
                    >
                      {item.icon && (
                        <item.icon className="w-6 h-6 fill-current text-inherit" />
                      )}

                      <span className="ml-4 text-lg">{item.title}</span>
                    </p>
                  )}
                </NavLink>
              </li>
            );
          })}

          <div className="nav__slider absolute w-[6px] h-[60px] bg-dark-500 rounded-tr-[10px] rounded-br-[10px] left-0 top-0"></div>
        </ul>
      </nav>
    </aside>
  );
};
