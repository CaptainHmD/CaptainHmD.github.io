const promise1 = new Promise(function(myResolve, myReject){

    setTimeout(() => {
        const rand = [true,false][Math.floor(Math.random()*2)]
        // if(rand)
        //     myResolve("resolved")
        //     else
        //     myReject('Rejected')
        // better way to do it
                //true                  //false
        rand ? myResolve("resolved") : myReject('Rejected')

    }, 200);
})

// console.log(promise1.then(
// sucess => console.log(sucess)
// ).catch(faild => console.log(faild)))

console.log(promise1.then(
sucess =>console.log(sucess)
).catch(faild => console.log(faild)))




// await


const awaitAsync = async() =>{
    try {
        const sucess = await promise1
   console.log(sucess)
    } catch (error) {
        console.log(error)

    }
}
awaitAsync()


// const getdog = async () =>{
//     const url ='https://dog.ceo/api/breeds/image/random'
//     const response = await fetch(url) 
//     const data = await response.json() // like .then(response)
//     img.innerHTML=`<img src= '${data.message}'/>` // last .then for the statements

// }
