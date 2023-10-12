// A program that contains basic functions for a bank account, including:
// - function display(): Display your current balance
// - function deposit(amount): Deposit money into your account, the amount of money must be a positive integer.
// - function withdraw(amount): Withdraw money from your account, the amount of money must be a positive integer, 
// and the balance after the transaction must be no less than 0.
const ERROR_MSG = 'Error: Invalid Input';
module.exports = class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    display() {
        return this.balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            return ERROR_MSG;
        }
        else {
            this.balance += amount;
            return this.balance;
        }
    }
    withdraw(amount) {
        if (amount <= 0 || this.balance - amount < 0) {
            return ERROR_MSG;
        }
        else {
            this.balance -= amount;
            return this.balance;
        }
    }
    transaction(type, amount = 0) {
        switch(type) {
            case 'display':
                return this.display();
            case 'deposit':
                return this.deposit(amount);
            case 'withdraw':
                return this.withdraw(amount);
            default:
                return ERROR_MSG;
        }
    }
}