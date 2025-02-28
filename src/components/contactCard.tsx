import { FC } from 'react';
import { ContactsData } from 'utils/types';

interface ContactCardProps {
  contact: ContactsData;
}

export const ContactCard: FC<ContactCardProps> = ({ contact }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={contact.picture}
        alt={contact.name}
        className="object-cover w-[50px] h-[50px] md:w-[70px] md:h-[70px] mb-4 rounded-full"
      />

      <div>
        <h2 className="text-dark-500 text-[12px] md:text-base">
          {contact.name}
        </h2>
        <p className="text-pale-blue-500 text-[12px] md:text-base">
          {contact.designation}
        </p>
      </div>
    </div>
  );
};

export const ContactCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center animate-pulse">
      <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] mb-4 bg-gray-200 rounded-full" />

      <div className="w-full">
        <div className="bg-gray-200 h-2 w-full rounded mb-2"></div>
        <div className="bg-gray-200 h-2 w-[80%]"></div>
      </div>
    </div>
  );
};
