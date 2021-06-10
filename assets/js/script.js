//API Key OpenWeather.org
// const BaseURL = "http://api.openweathermap.org/data/2.5/";
const API_Key = "d0521b9849b489989b94ed5dc75d1ee0";

let cs = "";
   

// let = whyisthisnotworking
const requestCity = async (zip) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?zip=${zip}&units=imperial&us&appid=${API_Key}`;

    // http://api.openweathermap.org/data/2.5/weather?zip=30033&units=imperial&us&appid=d0521b9849b489989b94ed5dc75d1ee0

    //fetch
   
    const response = await fetch(baseURL+query);

    //promise data
    const data = await response .json();
    console.log(data)
    return data;
} 
 

const searchForm = document.querySelector('.search-loaction');
const zipCode = document.querySelector('.search-location input');
var button = document.querySelector('.btn');
const zipName = document.querySelector('.zip-name p');
const cardBody = document.querySelector('.card-body');





updateWeatherApp = (zip) => {
    console.log(zip);

    
    //icon for weather
    const iconSrc = `https://openweathermap.org/img/wn/${zip.weather[0].icon}.png`

    // function convertToF(celsius) {
    //     return celsius * 9/5 + 32
    //   }
      
    //   convertToF(30);

    zipName.textContent = zip.name;
    console.log(zip)
    cardBody.innerHTML = ` <br>
    <div class="icon four wide column">
        <div class="city-location">
        <p>${zip.name}</p>
    </div>
    <div class="card-mid row">
      <div class="col">
        <p class="temp">${zip.main.temp}&#730</p>
        <span>Temp</span>
      </div>
      <div class="col">
        <p class="condition">${zip.weather[0].main}<img src="${iconSrc}" alt="" /></p>
        <span>Condition</span>     
      </div>
    </div>
    <hr size=2 noshade>
    <div class="card-bottom row">
      <div class="col">
        <p class="wind-speed">${zip.wind.speed}</p>
        <span>Wind</span>
      </div>
      <div class="col">
        <p class="humidity-con">${zip.main.humidity}</p>
        <span>Humidity</span>
      </div>
    </div>`
    console.log(zip.name)
}





function getDate() {
  // let zipcode = document.getElementById('zipcode').value;
  // console.log('zipcode is' + zipcode)
  console.log('get data');
}

button.addEventListener('click', e => {
  
    e.preventDefault();
    const citySearched = zipCode.value.trim();
    cs = citySearched
    console.log("script.js = " + citySearched);
    get_info(citySearched)
    // form.reset();

    requestCity(citySearched)
        .then((data) =>{
          localStorage.setItem(citySearched, data.name);
          updateWeatherApp(data);
        })
})
