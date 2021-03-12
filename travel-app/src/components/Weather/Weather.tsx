import React, { Component } from 'react';
import { TCountries, capitals } from '../../types/types';

interface TProps {
  country: TCountries,
  weatherData: any
}

export default class Weather extends Component<TProps> {

  render(){
    const {country, weatherData} = this.props;
    const countryCapital = capitals[country];
    const hasWeatherResponse = weatherData !== null;

    const icon = hasWeatherResponse ? weatherData.weather[0].icon : null;
    const description = hasWeatherResponse ? weatherData.weather[0].description : null;
    const temperature = hasWeatherResponse ? Math.round(weatherData.main.temp) : null;

    const weatherIconPath = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
      <div className='widget-weather'>
        <div className='widget-weather_capital'>{countryCapital}</div>
        <div className='widget-weather_temperature'>{temperature} °C</div>
        <img src={weatherIconPath} alt='weather icon'></img>
        <div className='widget-weather_description'>{description}</div>
      </div>
    )
  } 
}

