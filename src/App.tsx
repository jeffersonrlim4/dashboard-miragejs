import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { TransactionProvider } from './TransactionContext';
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionMomdalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <GlobalStyle />

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionMomdalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />

    </TransactionProvider>
  );
}
