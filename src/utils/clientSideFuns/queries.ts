import { cards, recentTransactions } from 'constants/data';
import { QueryFunction } from '@tanstack/react-query';
import { CardData, TransactionData } from 'utils/types';

export const fetchCards: QueryFunction<
  CardData[],
  [string, { page: number; limit: number }]
> = async ({ queryKey }) => {
  const [, { limit = 10 }] = queryKey;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return cards.slice(0, limit);
};

export const fetchRecentTransactions: QueryFunction<
  TransactionData[],
  [string, { page: number; limit: number }]
> = async ({ queryKey }) => {
  const [, { limit = 10 }] = queryKey;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return recentTransactions.slice(0, limit);
};
