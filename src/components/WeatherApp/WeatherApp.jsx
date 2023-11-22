import './WeatherApp.css'

import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';
import { useState } from 'react';


const WeatherApp = () => {

    const api_key = "c6f9b1a9f49ea4897650809ce88dbf8f";
    const [weatherIcon, setWeatherIcon] = useState(cloud_icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value === "") 
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName('humidity-percentage');
        const wind = document.getElementsByClassName('wind-rate');
        const temperature = document.getElementsByClassName("weather-temperature");
        const location = document.getElementsByClassName('weather-location');

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp) + "° C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n")
            {
                setWeatherIcon(clear_icon);
            }
            else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n")
            {
                setWeatherIcon(cloud_icon);
            }
            else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n")
            {
                setWeatherIcon(drizzle_icon);
            }
            else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n")
            {
                setWeatherIcon(drizzle_icon);
            }
            else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n")
            {
                setWeatherIcon(rain_icon);
            }
            else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n")
            {
                setWeatherIcon(rain_icon);
            }
            else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n")
            {
                setWeatherIcon(snow_icon);
            }
            else {
                setWeatherIcon(clear_icon);
            }


    }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search'/>
            <div className="search-icon" onClick={() =>{search()}}>
                <img src={search_icon} alt="search icon" />
            </div>
        </div>
        <div className="weather-image">
            <img src={weatherIcon} alt="weather" />
        </div>
        <div className="weather-temperature">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="icon" className="icon" />
                <div className="data">
                    <div className="humidity-percentage">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="icon" className="icon" />
                <div className="data">
                    <div className="wind-rate">18km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp