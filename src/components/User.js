import Transaction from './Transaction.js';

class User {
    constructor(Name, Uid) {
        this.name = Name;
        this.uid = Uid;
    };

    //declares a new transactions object which amount,
    //description,and tid (transaction id)
    //in the form 
    //transaction[description,value]
    #transactions = [];
    #name;
    #uid;

    //use this for adding Transaction objects only!!!!!!
    addTransactions(transaction) {
        this.transactions.add(transaction);
    };

    //finds a transaction by checking if its tid is the same as the tid
    //passed to the method
    getTransaction(tid) {
        return this.transactions.find(transaction => transaction.getTid() === tid);
    };

    //Returns the data of the user
    getUid() {
        return this.uid;
    };
    getName() {
        return this.name;
    };
}

export default User;