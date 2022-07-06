console.log('hello');
let title = document.getElementById('title')

title.innerHTML='<h2>i changged<h2>' // to make i changged massage h2 u have to use innerHTML
let massage = 'Hi i Channged again'
title.innerHTML = `<h2> ${massage} .<h2>`


// const redBox = document.getElementById('red-box')
// redBox.onclick = (a) =>  console.log('red box') // for click event

// const greenBox = document.getElementById('green-box')
// greenBox.onclick = (a) =>  console.log('green box') // for click event

// const blueBox = document.getElementById('blue-box')
// blueBox.onclick = (a) =>  console.log('blue box') // for click event

const allSquares = document.querySelectorAll('.box-style')
console.log(allSquares); // it will print all nodes for .box-style class
     var timesClicked = {red: 0,'blue': 0,green: 0}



     const redBox = document.getElementById('red-box')
     const redBoxText = document.createElement('h2')
     redBoxText.setAttribute('id','redBoxText');
     document.getElementById('red-box').appendChild(redBoxText);
     document.getElementById('redBoxText').innerHTML=0;



     const greenBox = document.getElementById('green-box')
     const greenBoxText = document.createElement('h2')
     greenBoxText.setAttribute('id','greenBoxText');
     document.getElementById('green-box').appendChild(greenBoxText);
     document.getElementById('greenBoxText').innerHTML=0;


     const blueBox = document.getElementById('blue-box')
     const blueBoxText = document.createElement('h2')
     blueBoxText.setAttribute('id','blueBoxText');
     document.getElementById('blue-box').appendChild(blueBoxText);
     document.getElementById('blueBoxText').innerHTML=0;



     function reset(){
          timesClicked = {red: 0,'blue': 0,green: 0}
          document.getElementById('blueBoxText').innerHTML=0;
          document.getElementById('greenBoxText').innerHTML=0;
          document.getElementById('redBoxText').innerHTML=0;
          
     }

     allSquares.forEach(square => square.onclick = ()=>{
          console.log(square.value)
          timesClicked[square.value]++
          console.log(  timesClicked[square.value])
          switch(square.value){
               case 'red': console.log('red');
                    document.getElementById('redBoxText').innerHTML=timesClicked.red;

                    break
               case 'green': console.log('green');
               document.getElementById('greenBoxText').innerHTML=timesClicked.green;

               break
               case 'blue': console.log('blue');
               document.getElementById(`blueBoxText`).innerHTML=timesClicked.blue;

               break
          }
          
     })




