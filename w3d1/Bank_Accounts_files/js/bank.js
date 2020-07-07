"use strict";

class Bank {
    constructor(){
        this._accounts = [];
    }

    getAccounts(){
        return this._accounts;
    }

    addAccount(){
        let account = new Account(Bank.nextAccountNumber);
        this._accounts.push(account);
    }

    addSavingsAccount(interest){
        let accSaving = new SavingsAccount(Bank.nextAccountNumber,interest);
        this._accounts.push(accSaving);
    }

    addCheckingAccount(overdraft){
        let accChecking = new CheckingAccount(Bank.nextAccountNumber, overdraft);
        this._accounts.push(accChecking);
    }

    closeAccount(number){
        this._accounts.remove(number);
    }

    getAccount(index){
        return this._accounts[index];
    }

    accountReport()
    {
        return this._accounts.map(acc => acc.toString())
            .reduce((accum, currentStr) => accum + currentStr + "\n", "");
        // for(let acc in this._accounts){
        //     acc.toString();
        // }
    }
    endOfMonth(){
        return  this._accounts.map(acc => acc.endOfMonth())
            .reduce((accum,currentStr) => accum + currentStr + "\n", "");
    }

}
Bank.nextAccountNumber = 1;