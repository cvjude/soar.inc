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
  id: string | undefined;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  isAdmin: boolean;
  profilePic: string;
  role: string;
  permissions?: string[];
  authToken?: string;
  preferredLanguage?: string;
  about?: string;
  designation?: string;
  status?: string;
  lastActivity?: Date;
}

export interface AuthStateData {
  user?: User | null | undefined;
  // We can add other things to the user object like permissions, etc.
}
