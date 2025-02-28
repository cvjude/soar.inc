import { CreditCard, CreditCardSkeleton } from 'components/creditCard';
import { DashbardTitleSection } from 'components/dashbardTitleSection';
import { useQuery } from '@tanstack/react-query';
import { fetchCards } from 'utils/clientSideFuns/queries';
import { FETCH_CARD_DATA } from 'constants/index';

export const MyCards = () => {
  const { data, isLoading } = useQuery({
    queryKey: [FETCH_CARD_DATA, { page: 1, limit: 2 }],
    queryFn: fetchCards,
  });

  return (
    <div className="md:col-span-2 overflow-hidden">
      <DashbardTitleSection title="My Cards" seeAllLink="/cards" />
      <div className="flex w-full gap-5 xl:gap-8 overflow-x-scroll md:overflow-auto">
        {isLoading
          ? [...Array(2)].map((_, index) => (
              <CreditCardSkeleton
                key={index}
                theme={index === 0 ? 'dark' : 'light'}
              />
            ))
          : data?.map((card, index) => (
              <CreditCard
                key={card.cardNumber}
                cardHolder={card.cardHolder}
                cardNumber={card.cardNumber}
                validThru={card.validThru}
                balance={card.balance}
                theme={index === 0 ? 'dark' : 'light'}
              />
            ))}
      </div>
    </div>
  );
};
