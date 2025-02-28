import { QueryFunction } from '@tanstack/react-query';
import { faker } from '@faker-js/faker';
import { CardData } from 'utils/types';

export const fetchCards: QueryFunction<
  CardData[],
  [string, { page: number; limit: number }]
> = async ({ queryKey }) => {
  const [, { limit = 10 }] = queryKey;

  const generateCardData = (): CardData => {
    const fullCardNumber = faker.finance.creditCardNumber();
    const last4Digits = fullCardNumber.slice(-4);
    const formattedCardNumber = `${fullCardNumber.slice(0, 4)} **** **** ${last4Digits}`;

    return {
      balance: faker.finance.amount(),
      cardHolder: faker.person.fullName(),
      validThru: faker.date
        .future()
        .toISOString()
        .slice(2, 7)
        .replace('-', '/'),
      cardNumber: formattedCardNumber,
    };
  };

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return Array.from({ length: limit }, generateCardData);
};
