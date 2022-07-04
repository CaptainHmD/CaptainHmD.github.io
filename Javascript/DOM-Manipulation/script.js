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

     allSquares.forEach(square => square.onclick = ()=>console.log(square.value))