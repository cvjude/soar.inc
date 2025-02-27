import { Search } from 'assets/search';
import { FC } from 'react';

interface SearchBarProps {
  placeholder: string;
}

export const SearchBar: FC<SearchBarProps> = ({
  placeholder = 'Search for something',
}) => {
  return (
    <div className="bg-pale-blue-100 flex items-center gap-2 px-8 rounded-[40px] h-[40px] lg:h-[50px]">
      <Search className="fill-current text-pale-blue-500 w-4 h-4" />
      <input
        type="text"
        placeholder={placeholder}
        className="text-pale-blue-400 placeholder:text-pale-blue-400 h-full text-sm lg:text-base"
      />
    </div>
  );
};
