class Bank {

constructor(balance){
    this.balance=balance
}

deposit = (amount)=>{
    this.balance +=amount
}
withdraw = (amount)=>{
    this.balance -=amount
}


}

