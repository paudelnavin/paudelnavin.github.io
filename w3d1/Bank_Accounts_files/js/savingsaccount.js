"use strict";

class SavingsAccount extends Account{
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest(){
        return this._interest;
    }

    setInterest(interest){
        this._interest = interest;
    }

    addInterest(){
        this.deposit(this.getBalance() * this._interest/100);
    }

    toString(){
        return "Saving Account " + this._number + ": balance " + this.getBalance() + ", Interest " + this._interest;
    }
}