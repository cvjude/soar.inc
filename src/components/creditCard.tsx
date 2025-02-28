import classNames from 'classnames';
import { FC } from 'react';
import { formatAmount } from 'utils/helpers';
import { CardData } from 'utils/types';

export const CreditCardLayout: FC<{
  children: React.ReactNode;
  theme?: 'dark' | 'light';
}> = ({ children, theme }) => (
  <div
    className={classNames(
      'aspect-[350/235] xl:aspect-auto w-full rounded-[15px] lg:rounded-[25px] flex flex-col justify-between min-w-[265px] md:min-w-auto',
      {
        'credit-card': theme === 'dark',
        'bg-white border border-pale-blue-300': theme !== 'dark',
      },
    )}
  >
    {children}
  </div>
);

interface CreditCardProps {
  theme?: 'dark' | 'light';
  card: CardData;
}

export const CreditCard: FC<CreditCardProps> = ({ card, theme }) => {
  return (
    <CreditCardLayout theme={theme}>
      <div className="w-full px-6 py-2 md:py-3 flex justify-between items-center">
        <div>
          <small
            className={classNames(
              'text-[11px] lg:text-[12px] xl:text-[15px] 2xl:text-xl font-lato',
              {
                'text-white': theme === 'dark',
                'text-pale-blue-500': theme !== 'dark',
              },
            )}
          >
            Balance
          </small>
          <p
            className={classNames(
              'md:text-xl 2xl:text-2xl  font-semibold font-lato',
              {
                'text-white': theme === 'dark',
                'text-dark-blue': theme !== 'dark',
              },
            )}
          >
            {formatAmount(card.balance)}
          </p>
        </div>

        <img
          src={theme === 'dark' ? '/chip_card.png' : '/chip_card_light.png'}
          alt="CHIP"
          className="w-10 h-10"
        />
      </div>

      <div className="grid grid-cols-3 px-6 py-2 md:py-3">
        <div className="col-span-2">
          <small
            className={classNames(
              'text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-xl font-lato',
              {
                'text-white/70': theme === 'dark',
                'text-pale-blue-500': theme !== 'dark',
              },
            )}
          >
            CARD HOLDER
          </small>
          <p
            className={classNames(
              'text-sm md:text-base 2xl:text-xl font-semibold font-lato',
              {
                'text-white': theme === 'dark',
                'text-dark-blue': theme !== 'dark',
              },
            )}
          >
            {card.cardHolder}
          </p>
        </div>

        <div>
          <small
            className={classNames(
              'text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-xl font-lato',
              {
                'text-white/70': theme === 'dark',
                'text-pale-blue-500': theme !== 'dark',
              },
            )}
          >
            VALID THRU
          </small>
          <p
            className={classNames(
              'text-sm lg:text-base 2xl:text-xl font-lato font-semibold',
              {
                'text-white': theme === 'dark',
                'text-dark-blue': theme !== 'dark',
              },
            )}
          >
            {card.validThru}
          </p>
        </div>
      </div>

      <div
        className={classNames(
          'px-6 py-4 mt-2 flex justify-between items-center',
          {
            'credit-card__footer': theme === 'dark',
            'border-t border-pale-blue-300': theme !== 'dark',
          },
        )}
      >
        <p
          className={classNames('font-lato text-sm lg:text-xl 2xl:text-2xl', {
            'text-white': theme === 'dark',
            'text-dark-blue': theme !== 'dark',
          })}
        >
          {card.cardNumber}
        </p>
        <img
          src={theme === 'dark' ? '/master-card.png' : '/master-card_light.png'}
          alt="CHIP"
          className="w-10 md:w-15"
        />
      </div>
    </CreditCardLayout>
  );
};

export const CreditCardSkeleton: FC<{
  theme?: 'dark' | 'light';
}> = ({ theme }) => {
  return (
    <CreditCardLayout theme={theme}>
      <div className="w-full p-6 flex justify-between items-center">
        <div className="rounded animate-pulse max-w-[100px] w-full flex flex-col gap-1">
          <div className="h-1 rounded bg-gray-200 w-[80%]"></div>
          <div className="h-2 rounded bg-gray-200"></div>
        </div>

        <img
          src={theme === 'dark' ? '/chip_card.png' : '/chip_card_light.png'}
          alt="CHIP"
          className="w-10 h-10"
        />
      </div>

      <div className="flex items-center p-6">
        <div className="rounded animate-pulse max-w-[100px] w-full flex flex-col gap-1 mr-20">
          <div className="h-1 rounded bg-gray-200 w-[80%]"></div>
          <div className="h-2 rounded bg-gray-200"></div>
        </div>

        <div className="rounded animate-pulse max-w-[100px] w-full flex flex-col gap-1">
          <div className="h-1 rounded bg-gray-200 w-[80%]"></div>
          <div className="h-2 rounded bg-gray-200"></div>
        </div>
      </div>

      <div className="credit-card__footer px-6 py-4 flex justify-between items-center">
        <div className="h-5 rounded-full bg-gray-200 w-[60%] animate-pulse"></div>

        <img
          src={theme === 'dark' ? '/master-card.png' : '/master-card_light.png'}
          alt="CHIP"
          className="w-10 md:w-15"
        />
      </div>
    </CreditCardLayout>
  );
};
