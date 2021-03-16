import React, { Component } from 'react';
import { TCountries } from '../../../types/types';
import data from '../../../countriesData/data';

interface TProps {
  country: TCountries,
  weatherData: any,
  lang: string,
}

export default class Weather extends Component<TProps> {

  render() {
    const {country, weatherData, lang} = this.props;
    const countryCapital = data[country].country[lang];
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

