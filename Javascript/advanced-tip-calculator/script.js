const billAmount = document.getElementById('bill-amount');
const tip = document.getElementById('tip');
const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const numberOfPeople = document.getElementById('number-of-people');
const totalPrice = document.getElementById('total-price')

let peoples = 1;

const calculateBill = () =>{
    const billTotal = Number(billAmount.value);
    const tip2 = Number(tip.value);
    let totalPricePerPerson = (tip2+billTotal)/peoples
    totalPricePerPerson = totalPricePerPerson.toFixed('2');
    totalPrice.innerHTML=`$${totalPricePerPerson}`



}

const increasePeople = () =>{
    peoples++;
    numberOfPeople.innerHTML=(peoples)
    calculateBill()
} 

const decreasePeople = () =>{
    if(peoples == 1)
        return
    peoples--;     
    numberOfPeople.innerHTML=(peoples)
    calculateBill();
} 
