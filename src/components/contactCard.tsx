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
        className="object-cover w-[50px] h-[50px] md:w-[70px] md:h-[70px] mb-4"
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
  return <div>ContactCardSkeleton</div>;
};
