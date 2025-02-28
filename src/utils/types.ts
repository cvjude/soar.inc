export interface IconProps {
  className?: string;
}

export interface Ilinks {
  icon?: any;
  title: string;
  href: string;
  sub?: Array<Ilinks>;
  className?: string;
  topBarTitle?: string;
}

export interface User {
  picture: string;
  fullName: string;
  email: string;
  dateOfBirth: string;
  userName: string;
  password: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface CardData {
  id: string;
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
}

export interface TransactionData {
  id: string;
  amount: string;
  date: string;
  description: string;
  type: 'debit' | 'credit';
  source: string;
}
