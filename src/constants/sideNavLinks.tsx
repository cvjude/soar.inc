import { Account } from 'assets/account';
import { CreditCard } from 'assets/creditCard';
import { Priviledge } from 'assets/econometrics';
import { Home } from 'assets/home';
import { Investment } from 'assets/investment';
import { Loan } from 'assets/loan';
import { Service } from 'assets/service';
import { Transactions } from 'assets/transactions';

export const links = [
  {
    icon: Home,
    title: 'Dashboard',
    topBarTitle: 'Overview',
    href: '/',
  },
  {
    icon: Transactions,
    title: 'Transactions',
    href: '/transactions',
  },
  {
    icon: Account,
    title: 'Accounts',
    href: '/accounts',
  },
  {
    icon: Investment,
    title: 'Investments',
    href: '/investments',
  },
  {
    icon: CreditCard,
    title: 'Credit Cards',
    href: '/credit-cards',
  },
  {
    icon: Loan,
    title: 'Loans',
    href: '/loans',
  },
  {
    icon: Service,
    title: 'Services',
    href: '/services',
  },
  {
    icon: Priviledge,
    title: 'My Priviledge',
    href: '/my-priviledges',
  },
  {
    icon: Priviledge,
    title: 'Settings',
    href: '/settings',
  },
];
