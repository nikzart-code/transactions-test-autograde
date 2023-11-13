import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

const App = () => {
    const [transactions, setTransactions] = useState([]);

    const handleNewTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    return (
        <div>
            <TransactionForm onNewTransaction={handleNewTransaction} />
            <TransactionList transactions={transactions} />
        </div>
    );
};

export default App;
