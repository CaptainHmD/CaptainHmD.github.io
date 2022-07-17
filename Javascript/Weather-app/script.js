// https://rapidapi.com/community/api/open-weather-map/ 
const options = {
	headers: {
		'X-RapidAPI-Key': '415c4f4c79mshbacbc03ac86e76cp1e9e49jsnc6c7054a3dce',
	}
};


const apiRecquest = async (countryInput) =>{
    const url = `https://community-open-weather-map.p.rapidapi.com/weather?q=${countryInput}&units=imperial`
    try{
        const response = await fetch(url,options)
         var data = await response.json()
         data.weather[0].main //it will do nothing just testing the error  , to go to the catch function 
    }catch(error){
        countryName('Invalid city');
        return
    }
    countryName(data.name)
     weatherType(data.weather[0].main)
     Temp(data.main.temp)
     minTemp(data.main.temp_min)
     maxTemp(data.main.temp_max)


}
// apiRecquest(); // if i remove ; symbols the next function will give error why??


const countryName = (data) =>{
    const countryNameid = document.getElementById('country-name')
    countryNameid.innerText=data

}


const weatherType=(data) => {
    const countryWeatherType= document.getElementById('country-weather-type')
    countryWeatherType.innerText=data
}

const tempClass = document.querySelectorAll('.temp') 
const Temp=(data) => {
    // console.log(data);
    // console.log(tempClass[0]);
    const FahrenheitToCelsius = ((data-32)/1.8).toFixed(1)
    tempClass[0].innerText=`Temp: ${FahrenheitToCelsius}°c`;
}


const minTemp=(data) => {
    // console.log(data);
    // console.log(tempClass[1]);
    const FahrenheitToCelsius = ((data-32)/1.8).toFixed(3) 
    tempClass[1].innerText=`Min Temp: ${FahrenheitToCelsius}°c`;
}


const maxTemp=(data) => {
    // console.log(data);
    // console.log(tempClass[2]);
    const FahrenheitToCelsius = ((data-32)/1.8).toFixed(3) 
    tempClass[2].innerText=`Max Temp: ${FahrenheitToCelsius}°c`;
}

const search= ()=>{
    const inputSearch = document.getElementById('input')
    const countryInput = inputSearch.value
    apiRecquest(countryInput);
    inputSearch.value=''


}


