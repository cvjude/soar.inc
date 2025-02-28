import { FC } from 'react';
import { Link } from 'react-router';

interface DashbardTitleSectionProps {
  title: string;
  seeAllLink?: string;
}

export const DashbardTitleSection: FC<DashbardTitleSectionProps> = ({
  title,
  seeAllLink,
}) => {
  return (
    <div className="flex justify-between text-dark-blue mb-5 items-center">
      <h1 className="text-lg md:text-2xl font-semibold">{title}</h1>

      {seeAllLink && (
        <Link
          to={seeAllLink as string}
          className="text-sm md:text-base font-semibold"
        >
          See All
        </Link>
      )}
    </div>
  );
};
