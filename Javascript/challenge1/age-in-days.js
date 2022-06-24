
function ageInDays(){
    var birthYear= prompt('What year were you born...');
    console.log(birthYear);
    if(isNaN(birthYear)){
        alert('Numbers only are valid');
    }else if (birthYear==null){ /* do nothing */  }
    else{
        var ageInDayss = (new Date().getFullYear()-birthYear)*365;
        var h2= document.createElement('h2');
        var result= document.createTextNode('Your age in Days: '+ageInDayss);
        h2.setAttribute('id','result');
        h2.appendChild(result);
        document.getElementById('box-result').appendChild(h2);
    }

}
function reset(){
    document.getElementById('result').remove();

}
