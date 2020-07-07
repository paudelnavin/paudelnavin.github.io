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

//withdraw from checking account
describe("Checking Account tests", function(){
    let account = new CheckingAccount(1, 100);
    account.deposit(200);

    it("throws eror when trying to withdraw amount that is greater than current balance plus overdraft.", function(){
        assert.throw(()=>{account.withdraw(1000)}, Error, "Insufficient funds.");
    });

    acc.withdraw(300);
    it("can withdraw amount that is less than current balance + overdraft", function(){
        assert.equal(-100, account.getBalance());
    });
});

describe("Bank Tests", function(){
    it("adds a new Account to the accounts array", function(){
        let bank = new Bank();
        bank.addAccount();
        assert.equal(1, bank.getAccounts().length);
        assert.equal(1, bank.getAccounts()[0].getNumber()); // account number starts from 1

        bank.addSavingsAccount(25);
        assert.equal(2, bank.getAccounts().length);

        bank.addCheckingAccount(100);
        assert.equal(3, bank.getAccounts().length);
    });

    it("deletes an account from account array when called closeAccount()", function(){
        let bank = new Bank();
        bank.addAccount();
        bank.addAccount();
        bank.addAccount();

        bank.getAccounts().forEach(account => {
            console.log(account.getNumber());
        });

        assert.equal(3, bank.getAccounts().length);
        assert.equal(2, bank.closeAccount(bank.getAccounts()[0].getNumber()));
        assert.equal(2, bank.getAccounts().length);
    });
});

