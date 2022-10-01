import crypto from 'crypto'

class Transaction {
  constructor(description,value) {
    this.id = crypto.randomUUID()
    this.description = description
    this.value = value
    this.percentage = -1
  }
  calcPercentage(totalIncome){
    if (totalIncome > 0){
      this.percentage = Math.round((this.value / totalIncome) * 100)
    } else {
      this.percentage = -1
    }
  };
  retrievePercentage(){
    return this.percentage
  }
};
class Income {
  constructor(description,value){
    this.id = crypto.randomUUID()
    this.description = description
    this.value = value
  }
  calculateTotal(type){
    const sum = 0
    //Missing data
  }
}
export default Transactions
