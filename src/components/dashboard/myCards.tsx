import { FETCH_CARD_DATA } from 'constants/index';
import { useQuery } from '@tanstack/react-query';
import { CreditCard, CreditCardSkeleton } from 'components/creditCard';
import { DashbardTitleSection } from 'components/dashbardTitleSection';
import { fetchCards } from 'utils/clientSideFuns/queries';

export const MyCards = () => {
  const { data, isLoading } = useQuery({
    queryKey: [FETCH_CARD_DATA, { page: 1, limit: 2 }],
    queryFn: fetchCards,
  });

  return (
    <div className="md:col-span-2 overflow-hidden h-full flex flex-col">
      <DashbardTitleSection title="My Cards" seeAllLink="/cards" />
      <div className="element-gap flex w-full overflow-x-scroll md:overflow-auto h-full">
        {isLoading
          ? [...Array(2)].map((_, index) => (
              <CreditCardSkeleton
                key={index}
                theme={index === 0 ? 'dark' : 'light'}
              />
            ))
          : data?.map((card, index) => (
              <CreditCard
                card={card}
                theme={index === 0 ? 'dark' : 'light'}
                key={card.id}
              />
            ))}
      </div>
    </div>
  );
};
