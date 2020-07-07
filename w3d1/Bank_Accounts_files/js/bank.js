"use strict";

class Bank {
    constructor(){
        this._accounts = [];
    }

    getAccounts(){
        return this._accounts;
    }

    addAccount(){
        this._accounts.push(new Account(Bank.nextAccountNumber));
        Bank.nextAccountNumber++;
        return this._accounts.length;
    }

    addSavingsAccount(interest){
        this._accounts.push(new SavingsAccount(Bank.nextAccountNumber, interest));
        Bank.nextAccountNumber++;
        return this._accounts.length;
    }

    addCheckingAccount(overdraft){
        this._accounts.push(new CheckingAccount(Bank.nextAccountNumber, overdraft));
        Bank.nextAccountNumber++;
        return this._accounts.length;
    }

    closeAccount(number){
        this._accounts =  this._accounts.filter(acc => acc.getNumber() !== number);
        return this._accounts.length;
    }

    accountReport()
    {
        for(let acc in this._accounts){
            acc.toString();
        }
    }
}
Bank.nextAccountNumber = 1;