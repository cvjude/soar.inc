import { FC } from 'react';
import { IconProps } from 'utils/types';

export const Chevron: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="9"
      height="15"
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1 1L7.5 7.5L1 14" strokeWidth="2" />
    </svg>
  );
};
