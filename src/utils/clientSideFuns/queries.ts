import {
  cards,
  recentTransactions,
  weeklyActivity,
  expenseStatistics,
  contacts,
  historyBalance,
} from 'constants/data';
import { QueryFunction } from '@tanstack/react-query';
import {
  CardData,
  TransactionData,
  WeeklyActivityData,
  ExpenseStaticsticsData,
  ContactsData,
  HistoryBalanceData,
} from 'utils/types';

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

export const fetchWeeklyActivity: QueryFunction<
  WeeklyActivityData[],
  [string]
> = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return weeklyActivity;
};

export const fetchExpenseStatistics: QueryFunction<
  ExpenseStaticsticsData[],
  [string]
> = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return expenseStatistics;
};

export const fetchContacts: QueryFunction<
  ContactsData[],
  [string]
> = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return contacts;
};

export const fetchBalanceHistory: QueryFunction<
  HistoryBalanceData[],
  [string]
> = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return historyBalance;
};
