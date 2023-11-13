export const generateTransactionId = (franchiseCode, deviceNumber) => {
    const timestamp = Date.now();
    franchiseCode = franchiseCode.toUpperCase();
    return `${franchiseCode}${deviceNumber}${timestamp}`;
};
