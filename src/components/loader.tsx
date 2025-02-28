import classNames from 'classnames';
import { FC } from 'react';

export const Loader: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <div className={classNames('relative w-5 h-5', className)}>
      <div className="w-10 h-10 absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <img src="/loader.gif" className="w-full h-full" alt="loading" />
      </div>
    </div>
  );
};
