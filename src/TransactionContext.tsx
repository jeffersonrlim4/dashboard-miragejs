import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

// interface TransactionInput {
//   title: string;
//   type: string;
//   category: string;
//   amount: number;
// }

type TransactionInout = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInout) => void;
}

export const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionProvider({children}: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  function createTransaction(transaction: TransactionInout) {

    api.post('transactions', transaction);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction}}>
      {children}
    </TransactionContext.Provider>
  )
}