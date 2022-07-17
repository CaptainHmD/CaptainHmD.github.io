const hello = document.getElementById('hello-world')
// hello.addEventListener('what your listing for',function)
 // there is a 1-on  'click' ||  2-on 'change' ||   3- on  'mouseover' ||   4-on  'mouseout'  || 5-on 'keydown'  || 6- on' loads'
 hello.addEventListener('mouseover',function (){
    // console.log(hello.innerText)
})
hello.addEventListener('click',()=>{ // on click print the contant of hello
    console.log(hello.innerText);
})


// document.addEventListener('mousemove',(event)=>{ // take the position of the cursor
//     console.log(event.clientX, event.clientY);
// })

// document.addEventListener('keydown',(event)=>{  // adding event for keyboard
//     if(event.key=='h' ||event.key=='H')
//         console.log('HHHHH')
//     else
//         console.log('NONE');
// })
