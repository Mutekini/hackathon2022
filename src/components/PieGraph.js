import spendingCategoryMap from "./spendingCategoryMap";

class PieGraph {
    constructor(Transactions) {
        this.transactions = Transactions;
    }

    #transactions=[];
    pieChartMap = new spendingCategoryMap();


}