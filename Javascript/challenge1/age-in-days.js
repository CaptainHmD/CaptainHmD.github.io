
function ageInDays(){
    reset()
    var birthYear= prompt('What year were you born...');
    console.log(birthYear);
    if(isNaN(birthYear)){
        alert('Numbers only are valid');
    }else if (birthYear==null){ /* do nothing */  }
    else{
        let ageInDayss = (new Date().getFullYear()-birthYear)*365;
        let h2= document.createElement('h2');
        let result= document.createTextNode('Your age in Days: '+ageInDayss);
        h2.setAttribute('id','result');
        h2.appendChild(result);
        document.getElementById('box-result').appendChild(h2);
    }

}
function reset(){
   let result= document.getElementById('box-result');
    result.innerHTML='';
}
