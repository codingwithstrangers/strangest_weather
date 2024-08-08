
import {API_KEY} from './api_key'
const key = API_KEY
document.addEventListener('DOMContentLoaded', () => {
    // Toggle between Celsius and Fahrenheit
    const toggleUnit = document.getElementById('toggleUnit');
    const currentTemp = document.getElementById('current_temp');
    const lowTemp = document.getElementById('low_temp');
    const highTemp = document.getElementById('high_temp');
    const hourlyTemps = document.querySelectorAll('.hour-temp');
    const weekdayMinTemps = document.querySelectorAll('.weekday-min');
    const weekdayMaxTemps = document.querySelectorAll('.weekday-max');

    toggleUnit.addEventListener('change', () => {
        const isCelsius = toggleUnit.checked;
        if (isCelsius) {
            convertToCelsius();
        } else {
            convertToFahrenheit();
        }
    });

    function convertToCelsius() {
        if (currentTemp) currentTemp.textContent = fahrenheitToCelsius(parseFloat(currentTemp.textContent)) + '°';
        if (lowTemp) lowTemp.textContent = fahrenheitToCelsius(parseFloat(lowTemp.textContent)) + '°';
        if (highTemp) highTemp.textContent = fahrenheitToCelsius(parseFloat(highTemp.textContent)) + '°';
        hourlyTemps.forEach(temp => {
            temp.textContent = fahrenheitToCelsius(parseFloat(temp.textContent)) + '°';
        });
        weekdayMinTemps.forEach(temp => {
            temp.textContent = 'Low: ' + fahrenheitToCelsius(parseFloat(temp.textContent.split(': ')[1])) + '°';
        });
        weekdayMaxTemps.forEach(temp => {
            temp.textContent = 'High: ' + fahrenheitToCelsius(parseFloat(temp.textContent.split(': ')[1])) + '°';
        });
    }

    function convertToFahrenheit() {
        if (currentTemp) currentTemp.textContent = celsiusToFahrenheit(parseFloat(currentTemp.textContent)) + '°';
        if (lowTemp) lowTemp.textContent = celsiusToFahrenheit(parseFloat(lowTemp.textContent)) + '°';
        if (highTemp) highTemp.textContent = celsiusToFahrenheit(parseFloat(highTemp.textContent)) + '°';
        hourlyTemps.forEach(temp => {
            temp.textContent = celsiusToFahrenheit(parseFloat(temp.textContent)) + '°';
        });
        weekdayMinTemps.forEach(temp => {
            temp.textContent = 'Low: ' + celsiusToFahrenheit(parseFloat(temp.textContent.split(': ')[1])) + '°';
        });
        weekdayMaxTemps.forEach(temp => {
            temp.textContent = 'High: ' + celsiusToFahrenheit(parseFloat(temp.textContent.split(': ')[1])) + '°';
        });
    }

    function fahrenheitToCelsius(temp) {
        return ((temp - 32) * 5 / 9).toFixed(1);
    }

    function celsiusToFahrenheit(temp) {
        return ((temp * 9 / 5) + 32).toFixed(1);
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('getWeatherButton').addEventListener('click', function() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            const city = searchInput.value;
            getWeatherData(city);
        } else {
            console.error('Search input element not found.');
        }
    });
});

// function to test the weather app

