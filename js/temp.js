const searchInput = document.getElementById("search-box");
document.getElementById('searchBtn').addEventListener('click', () => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=bf52945d00c211886a0ea12142339468`;
    searchInput.value = ''
    fetch(api)
        .then(res => res.json())
        .then(data => showTemp(data))
})

const placeName = document.getElementById("place")
const img = document.getElementById("img")
const placeWeather = document.getElementById("place-temp")
const placeWeatherCondition = document.getElementById("temp-condition")

function showTemp(temp) {
    img.innerHTML = `<img src="https://openweathermap.org/img/wn/${temp.weather[0].icon
        }@2x.png" alt="">`
    placeName.innerText = temp.name;
    placeWeather.innerHTML = `${Math.round(temp.main.temp - 273.15)} &deg;C`
    placeWeatherCondition.innerText = temp.weather[0].main;

}





























