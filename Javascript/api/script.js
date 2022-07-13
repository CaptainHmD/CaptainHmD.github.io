const img = document.getElementById('dog-image')
// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// .then(data => {
//     console.log(data.message);
//     img.innerHTML=`<img src= '${data.message}'/>`
// })

function dog(){
    fetch('https://dog.ceo/api/breeds/image/random').then(function(response){
        return response.json()
    }).then(function(data){
        img.innerHTML=`<img src= '${data.message}'/>`

    })
}
// dog()

const reload = ()=>{
    window.location.reload("Refresh")
}

 
// await

const getdog = async () =>{
    const url ='https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url) 
    const data = await response.json() // like .then(response)
    img.innerHTML=`<img src= '${data.message}'/>` // last .then for the statements

}
getdog()
