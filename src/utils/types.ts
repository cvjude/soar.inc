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
