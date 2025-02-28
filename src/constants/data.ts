import { TransactionData } from 'utils/types';

export const cards = [
  {
    id: 'card_1',
    balance: '5756',
    cardHolder: 'Eddy Cusuma',
    cardNumber: '3778 **** **** 1234',
    validThru: '12/22',
  },
  {
    id: 'card_2',
    balance: '200',
    cardHolder: 'Eddy Cusuma',
    cardNumber: '5338 **** **** 1234',
    validThru: '05/28',
  },
];

export const recentTransactions: TransactionData[] = [
  {
    id: 'trans_1',
    amount: '850',
    date: '28 January 2021',
    description: 'Deposit from my Card',
    type: 'debit',
    source: 'card',
  },
  {
    id: 'trans_2',
    amount: '2500',
    date: '25 January 2021',
    description: 'Deposit Paypal',
    type: 'credit',
    source: 'paypal',
  },
  {
    id: 'trans_3',
    amount: '5400',
    date: '21 January 2021',
    description: 'Jemi Wilson',
    type: 'credit',
    source: 'transfer',
  },
];
