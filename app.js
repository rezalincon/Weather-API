const apiKey ='5b9d813c856675d186c252405ef377c7';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateUi(data))
}

const searchButton = document.getElementById('src-btn');
searchButton.addEventListener('click', () =>{
    const inputCity = document.getElementById('city').value;
    getWeatherData(inputCity)
})

const updateUi = data =>{
    document.getElementById('show-city').innerText = data.name || "Unknown Location!";
    document.getElementById('show-temp').innerText = data.main.temp;
    document.getElementById('status').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value="";
}

getWeatherData('Dhaka');