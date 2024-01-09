// Function to make API request using Fetch API and return a Promise
function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Task 1: Fetch weather information from OpenWeatherMap API
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_OPENWEATHERMAP_API_KEY';
fetchData(weatherUrl)
    .then(weatherData => {
        document.getElementById('output').innerHTML += `<p>Weather in London: ${JSON.stringify(weatherData.weather[0].description)}</p>`;
    });

// Task 2: Fetch country information from REST Countries API
const countryUrl = 'https://restcountries.com/v2/name/Canada';
fetchData(countryUrl)
    .then(countryData => {
        document.getElementById('output').innerHTML += `<p>Country Name: ${countryData[0].name}, Capital: ${countryData[0].capital}</p>`;
    });

// Task 3: Fetch a Chuck Norris joke from Chuck Norris Jokes API
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
fetchData(jokeUrl)
    .then(jokeData => {
        document.getElementById('output').innerHTML += `<p>Chuck Norris Joke: ${jokeData.value}</p>`;
    });