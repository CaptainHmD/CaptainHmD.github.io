const img = document.getElementById('dog-image')
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
    console.log(data.message);
    img.innerHTML=`<img src= '${data.message}'/>`
})

const reload = ()=>{
    window.location.reload("Refresh")

}
