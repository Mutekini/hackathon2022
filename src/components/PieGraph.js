import spendingCategoryMap from "./spendingCategoryMap";

class PieGraph {
    constructor(Transactions) {
        //this constructor takes in a list of transactions from
        //the user
        this.transactions = Transactions;
        pieChartMap = new spendingCategoryMap();
    }

    //list of transactions
    #transactions=[];
    #pieChartMap;
    #numberOfTransactionsInCategory=[];

    print(transactions) {
        printPercentages(transactions);
    }
};

export default PieGraph;