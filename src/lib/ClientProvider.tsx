'use client';

import { Provider } from 'react-redux';
import  store  from './store'; // استورد المتجر الخاص بـ Redux

interface ClientProviderProps {
  children: React.ReactNode;
}

const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
