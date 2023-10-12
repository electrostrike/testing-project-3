// Sample test usage
// test('2 + 2 = 4', () => {
//    expect(2 + 2).toBe(4);
// })

const BankAccount = require('./bankAccount.js');

// test('Initialize a bank account', () => {
//     const myBankAccount = new BankAccount('Self', 100);
//     expect(myBankAccount).toBeDefined();
// })

test('T1: path 1 - 2 - 3', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.transaction('display')).toBe(100);
})

test('T2: path 1 - 2 - 4 - 7', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.transaction('deposit', -50)).toMatch(/Error/);
})

test('T3: path 1 - 2 - 4 - 8 - 9', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.transaction('deposit', 50)).toBe(150);
})

test('T4: path 1 - 2 - 5 - 12', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.transaction('withdraw', 150)).toMatch(/Error/);
})

test('T5: path 1 - 2 - 5 - 10 - 11', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.transaction('withdraw', 50)).toBe(50);
})

test('T6: path 1 - 2 - 6', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.transaction('transfer')).toMatch(/Error/);
})

