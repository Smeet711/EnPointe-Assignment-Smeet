import React, { useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useBalance } from '../context/BalanceContext';
import LoginComponent from '../components/LoginComponent';
import TransactionsComponent from '../components/TransactionsComponent';
import DepositWithdrawComponent from '../components/DepositWithdrawComponent';

const AppContent = () => {
  const { isAuthenticated, logout } = useAuth();
  const { balance } = useBalance();
  const transactionsRef = useRef(null);

  const scrollToTransactions = () => {
    transactionsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto">
        {!isAuthenticated ? (
          <LoginComponent />
        ) : (
          <div className="max-w-4xl mx-auto px-4 py-8">
            <header className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800">Welcome enPointe.io</h1>
              <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none">
                Logout
              </button>
              
            </header>
            <div className="bg-white shadow-md rounded-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Account Balance</h2>
              
              <div className="flex items-center justify-between">
                
                <span className="text-3xl font-bold text-gray-800">${balance}</span>
               
                <div>
              <DepositWithdrawComponent />
            </div>
            
              </div>
              
            </div>
            <button onClick={scrollToTransactions} className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none">
                  View Transactions
                </button>
            
            <div className="mb-8" ref={transactionsRef}>
              <TransactionsComponent />
            </div>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default AppContent;
