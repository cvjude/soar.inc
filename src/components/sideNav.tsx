import { Link, NavLink } from 'react-router';
import classnames from 'classnames';
import { links } from 'constants/sideNavLinks';
import { Ilinks } from 'utils/types';

export const SideNav = ({
  closeNav,
  open,
}: {
  closeNav: (e: any, page: string) => void;
  open: boolean;
}) => {
  return (
    <aside className="relative z-40 px-2 lg:px-5 pt-8 h-screen bg-primary-dark ">
      <div
        className={classnames('logo', {
          'w-24': open,
          'w-8': !open,
        })}
      >
        <Link to="/">
          <img
            src={!open ? '/logo-slim.png' : '/logo.png'}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>

      <nav className="mt-20">
        <ul className="flex flex-col gap-1">
          {links.map((item: Ilinks, idx: number) => {
            return (
              <li
                key={`${item.title}-${idx}`}
                className={classnames('min-h-[36px]', item.className)}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    classnames({
                      block: isActive && !item.sub,
                    })
                  }
                  onClick={(e) => {
                    item.sub && e.preventDefault();
                    closeNav(e, item.title);
                  }}
                >
                  {({ isActive }) => (
                    <div
                      className={classnames('w-full rounded-md lg:rounded-sm')}
                      tabIndex={idx}
                    >
                      <p
                        className={classnames('flex items-center px-3 py-2', {
                          'bg-primary/10 rounded-lg': isActive,
                          'justify-center': !open,
                        })}
                      >
                        {item.icon && (
                          <item.icon
                            className={classnames('w-6 h-6 stroke-current', {
                              'text-primary': isActive,
                              'text-txt': !isActive,
                            })}
                          />
                        )}
                        {open && (
                          <span className="ml-4 text-md">{item.title}</span>
                        )}
                      </p>
                    </div>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
