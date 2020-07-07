describe("get account number", function(){
    let account = new Account(1);
    it("retrieves the account number of the account", function(){
        assert.equal(1, account.getNumber());
    });
});

describe("get balance", function(){
    let account = new Account(1);
    it("retrieves the current balance", function(){
        assert.equal(0.0, account.getBalance());
    });
});

//Deposit
describe("desposit in bank", function () {
    let account = new Account(1);
    account.deposit(100);
    it("The function can change the balance, which add money into the account",
        function () {
            assert.equal(100, account.getBalance());
        });
});

//Withdraw
describe("withdraw from bank", function () {
    let acc = new Account(23432);
    acc.deposit(200);
    acc.withdraw(100);
    it("when withdraw is called with some amount, it decreases that amount from the current balance.", function(){
        assert.equal(100, acc.getBalance());
    });

    it("throws error when try to withdraw negative amount", function(){
        assert.throw(()=> {acc.withdraw(-100)}, RangeError, "Withdraw amount has to be greater than zero");
    });
});

describe("toString", function(){
    let account = new Account(1);
    account.deposit(200);
    it("returns the string representation of the account", function(){
        assert.equal("Account 1: balance 200", account.toString());
    });
});

//Add Interest
describe("Savings Account tests", function(){
    let account = new SavingsAccount(1, 5);
    account.deposit(100);
    account.addInterest();

    it("adds the interest amount to the current balance.", function(){
        assert.equal(105, account.getBalance());
    });

    it("returns the toString representation of savings account ", function(){
        assert.equal("Saving Account 1: balance 105, Interest 5", account.toString());
    });
});
