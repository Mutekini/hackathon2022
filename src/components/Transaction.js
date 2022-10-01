import { v4 as uuidv4 } from 'uuid';

class Transaction {
  tid;
  constructor(description,value) {
    this.tid = uuidv4()
    this.description = description
    this.value = value
    this.percentage = -1
    const date = new Date()
    this.strDate = date.toISOString()
  }
  getDescription(){
    return this.description
  }
  getValue(){
    return this.value
  }
  getTid(){
    return this.tid
  }
  getDate(){
    return this.strDate
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
  tid;
  constructor(description,value){
    this.tid = uuidv4()
    this.description = description
    this.value = value
  }
  getTidIncome(){
    return this.tid
  }
  getDescIncome(){
    return this.description
  }
  getValIncome(){
    return this.value
  }
  calcTotal(type){
    const sum = 0
    //Missing data
  }
}
export default Transaction
