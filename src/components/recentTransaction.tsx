import classNames from 'classnames';
import { FC } from 'react';
import { formatAmount } from 'utils/helpers';
import { TransactionData } from 'utils/types';

interface RecentTransactionComponentProps {
  transaction: TransactionData;
}

export const RecentTransaction: FC<RecentTransactionComponentProps> = ({
  transaction,
}) => {
  const sourceIcon = {
    card: '/card.png',
    paypal: '/paypal.png',
    transfer: '/money.png',
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-5">
        <div
          className={classNames(
            'w-14 2xl:w-18 h-14 2xl:h-18 grid place-content-center rounded-full',
            {
              'bg-pale-yellow-50 text-pale-yellow-500':
                transaction.source === 'card',
              'bg-pale-purple-50 text-pale-purple-500':
                transaction.source === 'paypal',
              'bg-pale-teal-50 text-pale-teal-500':
                transaction.source === 'transfer',
            },
          )}
        >
          <img
            src={
              sourceIcon[transaction.source as 'card' | 'paypal' | 'transfer']
            }
            alt={`${transaction.source} icon`}
            className="w-7 h-7 mx-auto"
          />
        </div>
        <div>
          <p className="text-dark-500 text-sm md:text-base font-medium">
            {transaction.description}
          </p>
          <small className="text-pale-blue-500 text-[12px] md:text-[15px]">
            {transaction.date}
          </small>
        </div>
      </div>

      <div
        className={classNames('text-[11px] md:text-base', {
          'text-credit-green': transaction.type === 'credit',
          'text-debit-red': transaction.type === 'debit',
        })}
      >
        {transaction.type === 'debit' ? '-' : ''}
        {formatAmount(transaction.amount)}
      </div>
    </div>
  );
};

export const RecentTransactionLoader: FC = () => {
  return (
    <div className="flex justify-between items-center animate-pulse">
      <div className="flex items-center gap-5 w-full">
        <div className="w-14 2xl:w-18 h-14 2xl:h-18 grid place-content-center rounded-full bg-gray-200"></div>

        <div className="flex-1">
          <div className="bg-gray-200 w-[80%] h-2 rounded mb-2"></div>
          <div className="bg-gray-200 w-[40%] h-2 rounded"></div>
        </div>
      </div>

      <div className="text-[11px] md:text-base bg-gray-200 w-[100px] h-2 rounded"></div>
    </div>
  );
};
