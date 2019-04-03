import React, { Component } from 'react';

class WeatherDisplay extends Component {
    constructor() {
        super();

        this.state = {
            weatherData: null
        };
    }

    componentDidMount() {
        const id = this.props.id;
        const url = 'http://api.openweathermap.org/data/2.5/weather?id=' + id + '&lang=ru&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric';

        fetch(url).then(res => res.json()).then(json => {
            this.setState({ weatherData: json });
            console.log(json);
        });
    }

    render() {
        const weatherData = this.state.weatherData;


        if (!weatherData) return <div><img src="loader.gif" alt='loading' /></div>;
        console.log(weatherData);
        const iconUrl = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
        const weatherDesc = weatherData.weather[0].description;

        return (
            <div>
                <h2><span className="badge badge-light city-name">{this.props.cityName}</span></h2>
                <p>
                    <span className='weather-desc'>Здесь {weatherDesc}</span> <img src={iconUrl} alt={weatherDesc} />
                </p>
                <p>
                    Температура:  <span className="badge badge-dark">{weatherData.main.temp}°C</span>
                </p>
                <p>
                    Максимальная:  <span className="badge badge-info">{weatherData.main.temp_max}°C</span>
                </p>
                <p>
                    Минимальная:  <span className="badge badge-secondary">{weatherData.main.temp_min}°C</span>
                </p>
                <p>
                    Влажность:  <span className="badge badge-primary">{weatherData.main.humidity} %</span>
                </p>
                <p>
                    Ветер:  <span className="badge badge-success">{weatherData.wind.speed} м/с</span>
                </p>
                {console.log(JSON.stringify(weatherData))}
            </div>
        )
    }
}

export default WeatherDisplay;