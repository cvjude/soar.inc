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

export const weeklyActivity = [
  { day: 'Sat', deposit: 250, withdraw: 500 },
  { day: 'Sun', deposit: 150, withdraw: 350 },
  { day: 'Mon', deposit: 250, withdraw: 320 },
  { day: 'Tue', deposit: 380, withdraw: 480 },
  { day: 'Wed', deposit: 250, withdraw: 150 },
  { day: 'Thu', deposit: 250, withdraw: 400 },
  { day: 'Fri', deposit: 320, withdraw: 400 },
];

export const expenseStatistics = [
  { label: 'Entertainment', value: 20.39 },
  { label: 'Bill Expense', value: 13.61 },
  { label: 'Others', value: 25 },
  { label: 'Investment', value: 41 },
];

export const contacts = [
  {
    id: 'contact_1',
    name: 'Livia Bator',
    picture: '/livia_bator.png',
    designation: 'CEO',
  },
  {
    id: 'contact_2',
    name: 'Randy Press',
    picture: '/randy_press.png',
    designation: 'Director',
  },
  {
    id: 'contact_3',
    name: 'Workman',
    picture: '/workman.png',
    designation: 'Designer',
  },
  {
    id: 'contact_4',
    name: 'Jemi Wilson',
    picture: '/jemi_wilson.png',
    designation: 'Developer',
  },
  {
    id: 'contact_5',
    name: 'Eddy Cusuma',
    picture: '/eddy_cusuma.png',
    designation: 'Manager',
  },
];

export const historyBalance = [
  { month: 'Jul', balance: 150 },
  { month: 'Aug', balance: 300 },
  { month: 'Sep', balance: 250 },
  { month: 'Oct', balance: 450 },
  { month: 'Nov', balance: 420 },
  { month: 'Dec', balance: 800 },
  { month: 'Jan', balance: 200 },
  { month: 'Feb', balance: 580 },
  { month: 'Mar', balance: 250 },
  { month: 'Apr', balance: 620 },
  { month: 'May', balance: 620 },
  { month: 'Jun', balance: 620 },
];
