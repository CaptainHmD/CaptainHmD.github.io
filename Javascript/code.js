console.log('hello');
// alert('hi');
var b = 'smoothie';
console.log(b);



document.getElementById("title1").innerHTML = 'I changed';
function fun(){
    var num =0
    while(num <10){
        console.log(num);
        num++
    }
    
    
}

let arr = new Array(12, 121 , 313);
console.log(arr[2]);
fun();

const array=[1,2,3,4,5,6];
console.log(array.filter(num =>num>3))

// let result = [1,2,3,4,5,6].map(number =>{console.log(number)})

sum = (a,b) => a+b
var result = array.reduce((a,b) => a+b)
// console.log((result));

const actors = [
    { name: 'johnny', netWorth: 2000000 },
    { name: 'amber', netWorth: 10 },
    { name: 'matt', netWorth: 170000000 },
    { name: 'brad', netWorth: 300000000 },
    { name: 'leonardo', netWorth: 10000000 },
  ]

  var sumOfnetWorths = actors.reduce((prev,curr) => prev+curr.netWorth ,0); //////

  console.log(sumOfnetWorths);
  /////

