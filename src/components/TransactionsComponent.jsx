import React from 'react';
import { useTransactions } from '../context/TransactionsContext';
// import { api } from '../services/api';


const TransactionsComponent = () => {
  const { transactions } = useTransactions();

//   const { token } = useAuth();
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const response = await api.get('/transactions', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setTransactions(response.data);
//       } catch (error) {
//         console.error('Failed to fetch transactions', error);
//       }
//     };
//     fetchTransactions();
//   }, [token]);

  return (
    <div className="p-4 bg-white shadow-md rounded-md mt-4">
      <h2 className="text-2xl mb-4">Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="mb-2">
            {transaction.description}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsComponent;
