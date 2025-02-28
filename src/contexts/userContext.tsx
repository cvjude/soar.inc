import { createContext, useContext, useState, ReactNode } from 'react';
import { User } from 'utils/types';

const defaultUser: User = {
  picture: '/charlene.png',
  fullName: 'Charlene Reed ',
  email: 'charlenereed@gmail.com ',
  dateOfBirth: '25-01-1990',
  userName: 'charlenereed',
  password: 'charlenereed',
  presentAddress: 'San Jose, California, USA',
  permanentAddress: 'San Jose, California, USA',
  city: 'San Jose',
  postalCode: '45962',
  country: 'USA',
};

interface UserContextType {
  user: User | null;
  updateUser: (user: User) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(defaultUser);

  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  const clearUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
