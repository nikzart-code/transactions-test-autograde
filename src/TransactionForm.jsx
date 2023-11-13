import React, { useState } from 'react';
import { generateTransactionId } from './generateTransactionId';

const TransactionForm = ({ onNewTransaction }) => {
    const [franchiseCode, setFranchiseCode] = useState('');
    const [deviceNumber, setDeviceNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const transactionId = generateTransactionId(franchiseCode, deviceNumber);
        onNewTransaction({ franchiseCode, deviceNumber, transactionId });
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={franchiseCode} onChange={(e) => setFranchiseCode(e.target.value)} placeholder="Franchise Code" />
            <input type="number" value={deviceNumber} onChange={(e) => setDeviceNumber(e.target.value)} placeholder="Device Number" />
            <button type="submit">Generate Transaction ID</button>
        </form>
    );
};

export default TransactionForm;
