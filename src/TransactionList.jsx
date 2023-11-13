import React from 'react';

const TransactionList = ({ transactions }) => {
    return (
        <div>
            <h2>Transactions</h2>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        {transaction.transactionId}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
