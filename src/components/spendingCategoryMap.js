class spendingCategoryMap {
    constructor() {
        //writes a huge map of default categories
        this.categories.push("Other");
        this.categories.push("Groceries");
        this.categories.push("Fast Food");
        this.categories.push("Convenience Stores");
        this.categories.push("Drug Stores");
        this.categories.push("Vending Machines");

        // huge map that relates stores listed in
        // transaction descriptions with expense categories
        //
        // Default
        this.spendingCategoryMap.set('','Other');
        //
        // Groceries
        this.spendingCategoryMap.set('wal-mart',"Groceries");
        this.spendingCategoryMap.set('whole foods',"Groceries");
        this.spendingCategoryMap.set('target',"Groceries");
        this.spendingCategoryMap.set('aldi',"Groceries");
        this.spendingCategoryMap.set('trader joe',"Groceries");
        this.spendingCategoryMap.set('kroger',"Groceries");
        this.spendingCategoryMap.set('publix',"Groceries");
        this.spendingCategoryMap.set('wegman',"Groceries");
        this.spendingCategoryMap.set('safeway',"Groceries");
        this.spendingCategoryMap.set('costco',"Groceries");
        this.spendingCategoryMap.set('albertsons',"Groceries");
        this.spendingCategoryMap.set('h-e-b',"Groceries");
        this.spendingCategoryMap.set('hy-vee',"Groceries");
        this.spendingCategoryMap.set('winn-dixie',"Groceries");
        this.spendingCategoryMap.set('fresh market',"Groceries");
        //
        // Fast Food/Restaurants
        this.spendingCategoryMap.set('mcdonalds',"Fast Food");
        this.spendingCategoryMap.set('starbucks',"Fast Food");
        this.spendingCategoryMap.set('chick fil a',"Fast Food");
        this.spendingCategoryMap.set('taco bell',"Fast Food");
        this.spendingCategoryMap.set('wendy',"Fast Food");
        this.spendingCategoryMap.set('dunkin',"Fast Food");
        this.spendingCategoryMap.set('burger king',"Fast Food");
        this.spendingCategoryMap.set('bk',"Fast Food");
        this.spendingCategoryMap.set('subway',"Fast Food");
        this.spendingCategoryMap.set('domino',"Fast Food");
        this.spendingCategoryMap.set('chipotle',"Fast Food");
        this.spendingCategoryMap.set('sonic',"Fast Food");
        this.spendingCategoryMap.set('panera',"Fast Food");
        this.spendingCategoryMap.set('pizza hut',"Fast Food");
        this.spendingCategoryMap.set('kfc',"Fast Food");
        this.spendingCategoryMap.set('popeye',"Fast Food");
        this.spendingCategoryMap.set('panda express',"Fast Food");
        this.spendingCategoryMap.set('dairy queen',"Fast Food");
        this.spendingCategoryMap.set('little caesar',"Fast Food");
        this.spendingCategoryMap.set('arby',"Fast Food");
        this.spendingCategoryMap.set('olive garden',"Fast Food");
        this.spendingCategoryMap.set('applebee',"Fast Food");
        this.spendingCategoryMap.set('buffalo wild wings',"Fast Food");
        this.spendingCategoryMap.set('papa john',"Fast Food");
        //
        // Convenienve Stores
        this.spendingCategoryMap.set('7-eleven',"Convenience Stores");
        this.spendingCategoryMap.set('speedway',"Convenience Stores");
        this.spendingCategoryMap.set('circle k',"Convenience Stores");
        this.spendingCategoryMap.set('quiktrip',"Convenience Stores");
        //
        // Drugstore
        this.spendingCategoryMap.set('cvs',"Drug Stores");
        this.spendingCategoryMap.set('walgreens',"Drug Stores");
        //
        // Misc
        this.spendingCategoryMap.set('coca cola',"Vending Machines");
    }

    //stores list of store category classifications
    #categories = [];

    //stores list of stores
    #stores = []

    //maps stores to store categories
    #spendingCategoryMap = new Map();

    //maps string to a category, in the form of a string
    //for the name of some keyword used by a store on their
    //chase receipts, 
    //"every chase receipt that contains storeName is of
    //the store category categoryName"
    addStoreToCategory(storeName, categoryName) {
        //finds index of category in the list from its name
        index = categories.findIndex(category => category === categoryName);
        //maps name to category
        this.spendingCategoryMap(storeName, category.at(index));
    }
    deleteStoreFromCategory(storeName) {
        //deletes key from map
        this.spendingCategoryMap.delete(storeName);
    }


    //adds a new category to the list (parameter takes the form)
    //of the name of the category
    addCategory(categoryName) {
        this.categories.push(categoryName);
    }
    deleteCategory(categoryName) {
        for(const[key,value] of this.spendingCategoryMap) {
            //this is super inefficient but it works well enough
            //this prevents the order of the loop from being ruined
            //if a deletion is made and the map moves up
            while(value === categoryName) {
                spendingCategoryMap.delete(key);
            }
        }
        //finds index of category name
        index = categories.findIndex(category => category === categoryName);
        //deletes index of category name
        this.categories.splice(index)
    }


    getValue(key) {
        this.spendingCategoryMap.get(key);
    }

    //a simple function to print the percentage composition of different
    //categories in a list of transactions
    printPercentages(Transactions) {
        for(const[key,value] of this.spendingCategoryMap) {
            for(constant[i] of Transactions) {
                if(Transactions[i].getDescription().includes(key)) {
                    numberOfTransactionsInCategory[spendingCategoryMap.findIndex(item => item === value)]++;
                }
            }
        }
        total = transactions.size();
        for(const[i] of this.numberOfTransactionsInCategory) {
            console.log(numberOfTransactionsInCategory[i]/total + " ");
        }
    }
};

export default spendingCategoryMap;