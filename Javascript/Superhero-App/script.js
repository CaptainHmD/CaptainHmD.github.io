

const superHero = (id) =>{
    fetch(`https://www.superheroapi.com/api.php/727897758487503/${id}`).then(response => response.json())
    .then(data =>{
        console.log(data.name);
    })
}

// superHero(17)

function superHero1(){
    fetch(`https://www.superheroapi.com/api.php/727897758487503/search/batman`).then(function(response) {
       return response.json()
    }).then(function (data){
        console.log(data.results[0].id);
    })
}
    superHero1()

    



























//727897758487503