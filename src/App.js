import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { BalanceProvider } from './context/BalanceContext';
import { TransactionsProvider } from './context/TransactionsContext';
import AppContent from './root/AppContent';


const App = () => (
  <AuthProvider>
    <BalanceProvider>
      <TransactionsProvider>
        <AppContent/>
      </TransactionsProvider>
    </BalanceProvider>
  </AuthProvider>
);

export default App;
