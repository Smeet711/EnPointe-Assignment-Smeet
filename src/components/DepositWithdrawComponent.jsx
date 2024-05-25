import React, { useState } from 'react';
import { useBalance } from '../context/BalanceContext';
import { useTransactions } from '../context/TransactionsContext';

const DepositWithdrawComponent = () => {
  const { balance, setBalance } = useBalance();
  const { addTransaction } = useTransactions();
  const [amount, setAmount] = useState('');
  const [action, setAction] = useState('deposit');

  const handleTransaction = (e) => {
    e.preventDefault();
    const amountValue = parseFloat(amount);
    let newBalance;

    if (action === 'deposit') {
      newBalance = balance + amountValue;
      addTransaction({ id: Date.now(), description: 'Deposit', amount: amountValue });
    } else {
      newBalance = balance - amountValue;
      addTransaction({ id: Date.now(), description: 'Withdrawal', amount: -amountValue });
    }
    
    setBalance(newBalance);
  };

//   const handleTransaction = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post(`/transactions/${action}`, { amount });
//       setBalance(response.data.balance);
//     } catch (error) {
//       console.error('Transaction failed', error);
//     }
//   };

  return (
    <form onSubmit={handleTransaction} className="flex flex-col max-w-sm mx-auto p-4 bg-white shadow-md rounded-md mt-4">
      <h2 className="text-2xl mb-4 text-center">Deposit/Withdraw</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 mb-2 border rounded"
      />
      <select value={action} onChange={(e) => setAction(e.target.value)} className="p-2 mb-4 border rounded">
        <option value="deposit">Deposit</option>
        <option value="withdraw">Withdraw</option>
      </select>
      <button type="submit" className="p-2 bg-green-500 text-white rounded hover:bg-green-700">
        Submit
      </button>
    </form>
  );
};

export default DepositWithdrawComponent;
