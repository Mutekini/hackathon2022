class spendingCategoryMap {
    constructor() {
        //writes a huge map of default categories
        this.categories.push("Other");
        this.categories.push("Groceries");
        this.categories.push("Fast Food");
        this.categories.push("Convenience Stores");
        this.categories.push("Drug Stores");
        this.categories.push("Vending Machines");

        // declares a huge map that relates stores listed in
        // transaction descriptions with expense categories
        //
        // Groceries
        this.spendingCategoryMap.set('',categories.at(0));
        this.spendingCategoryMap.set('wal-mart',categories.at(1));
        this.spendingCategoryMap.set('whole foods',categories.at(1));
        this.spendingCategoryMap.set('target',categories.at(1));
        this.spendingCategoryMap.set('aldi',categories.at(1));
        this.spendingCategoryMap.set('trader joe',categories.at(1));
        this.spendingCategoryMap.set('kroger',categories.at(1));
        this.spendingCategoryMap.set('publix',categories.at(1));
        this.spendingCategoryMap.set('wegman',categories.at(1));
        this.spendingCategoryMap.set('safeway',categories.at(1));
        this.spendingCategoryMap.set('costco',categories.at(1));
        this.spendingCategoryMap.set('albertsons',categories.at(1));
        this.spendingCategoryMap.set('h-e-b',categories.at(1));
        this.spendingCategoryMap.set('hy-vee',categories.at(1));
        this.spendingCategoryMap.set('winn-dixie',categories.at(1));
        this.spendingCategoryMap.set('fresh market',categories.at(1));
        //
        // Fast Food/Restaurants
        this.spendingCategoryMap.set('mcdonalds',categories.at(2));
        this.spendingCategoryMap.set('starbucks',categories.at(2));
        this.spendingCategoryMap.set('chick fil a',categories.at(2));
        this.spendingCategoryMap.set('taco bell',categories.at(2));
        this.spendingCategoryMap.set('wendy',categories.at(2));
        this.spendingCategoryMap.set('dunkin',categories.at(2));
        this.spendingCategoryMap.set('burger king',categories.at(2));
        this.spendingCategoryMap.set('bk',categories.at(2));
        this.spendingCategoryMap.set('subway',categories.at(2));
        this.spendingCategoryMap.set('domino',categories.at(2));
        this.spendingCategoryMap.set('chipotle',categories.at(2));
        this.spendingCategoryMap.set('sonic',categories.at(2));
        this.spendingCategoryMap.set('panera',categories.at(2));
        this.spendingCategoryMap.set('pizza hut',categories.at(2));
        this.spendingCategoryMap.set('kfc',categories.at(2));
        this.spendingCategoryMap.set('popeye',categories.at(2));
        this.spendingCategoryMap.set('panda express',categories.at(2));
        this.spendingCategoryMap.set('dairy queen',categories.at(2));
        this.spendingCategoryMap.set('little caesar',categories.at(2));
        this.spendingCategoryMap.set('arby',categories.at(2));
        this.spendingCategoryMap.set('olive garden',categories.at(2));
        this.spendingCategoryMap.set('applebee',categories.at(2));
        this.spendingCategoryMap.set('buffalo wild wings',categories.at(2));
        this.spendingCategoryMap.set('papa john',categories.at(2));
        //
        // Convenienve Stores
        this.spendingCategoryMap.set('7-eleven',categories.at(3));
        this.spendingCategoryMap.set('speedway',categories.at(3));
        this.spendingCategoryMap.set('circle k',categories.at(3));
        this.spendingCategoryMap.set('quiktrip',categories.at(3));
        //
        // Drugstore
        this.spendingCategoryMap.set('cvs',categories.at(4));
        this.spendingCategoryMap.set('walgreens',categories.at(4));
        //
        // Misc
        this.spendingCategoryMap.set('coca cola',categories.at(5));
    }

    //stores list of store category classifications
    #categories = [];

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
        i = 0
        for(const[key,value] of this.#spendingCategoryMap) {
            //this is super inefficient but it works well enough
            while(value === categoryName) {
                spendingCategoryMap.delete(key);
            }
        }

        //finds index of category name
        index = categories.findIndex(category => category === categoryName);

        //deletes index of category name
        this.categories.splice(categories.findIndex())
    }
};

export default spendingCategoryMap;