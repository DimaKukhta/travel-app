import React, { Component, Fragment } from 'react';

import { TCountries, currencies, capitals } from '../../types/types';

import './widget.css'

//interface
type TState = {
  [key: string]: any;
  // currencyData: object,
  // weatherData: object,
}

export default class Widget extends Component<{country: TCountries}, TState> {
  constructor(props: {country: TCountries}) {
    super(props)
    this.state = {
      currencyData: null,
      weatherData: null,
      time: new Date(),
    }
  }


  componentDidMount() {
    const {country} = this.props;
    const countryCapital = capitals[country];

    // fetching currency
    const BASE_URL ='https://api.exchangerate.host';
    const SEARCH_PATH ='/latest';
    const SEARCH_PARAM ='base=';
    const SEARCH_QUERY = currencies[country];

    fetch(`${BASE_URL}${SEARCH_PATH}?${SEARCH_PARAM}${SEARCH_QUERY}`)
      .then(response => response.json())
      .then(result => this.updateCurrencyData(result))
      .catch(error => this.updateCurrencyData(error));
      console.log(`${BASE_URL}${SEARCH_PATH}?${SEARCH_PARAM}${SEARCH_QUERY}`)

    // fetching weather
    // `http://api.openweathermap.org/data/2.5/weather?q=camberra&units=metric&appid=74b721a02a61edbbd2564e83bdc1f207`

    const WEATHER_BASE_URL ='http://api.openweathermap.org';
    const WEATHER_SEARCH_PATH ='/data/2.5/weather';
    const WEATHER_SEARCH_QUERY = countryCapital;
    const WEATHER_SEARCH_PARAM =`q=${WEATHER_SEARCH_QUERY}&units=metric&appid=`;
    const WEATHER_API_KEY ='74b721a02a61edbbd2564e83bdc1f207';

    fetch(`${WEATHER_BASE_URL}${WEATHER_SEARCH_PATH}?${WEATHER_SEARCH_PARAM}${WEATHER_API_KEY}`)
      .then(response => response.json())
      .then(result => this.updateWeatherData(result))
      .catch(error => this.updateWeatherData(error))
  }

  updateWeatherData = (data: object): void => {
    this.setState({
      weatherData: data,
    })
  }

  updateCurrencyData = (data: object): void => {
    this.setState({
      currencyData: data,
    })
  }

  render() {
    const {country} = this.props;
    const countryCurrency = currencies[country];

    const hasCurrencyResponse = this.state.currencyData !== null;
    const hasWeatherResponse = this.state.weatherData !== null;


    const rates = hasCurrencyResponse ? this.state.currencyData.rates : null;
    const icon = hasWeatherResponse ? this.state.weatherData.weather[0].icon : null;
    const description = hasWeatherResponse ? this.state.weatherData.weather[0].description : null;
    const temperature = hasWeatherResponse ? Math.round(this.state.weatherData.main.temp) : null;


    const weatherIconPath = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    const currenciesArray: string[] =['EUR', 'USD', 'BYN'];

    return (
      <div>
        <div className='widget'>
          <div>{`${country} (${countryCurrency})`}</div>
          <div className='widget-currency'>
            <Fragment>
              {currenciesArray.map( curr => (
                <div className={`widget-currency__${curr}`}>1 : {rates && +(rates[curr]).toFixed(3)} {curr}</div>
              ))}
            </Fragment>
          </div>
          <hr></hr>
          <div className='widget-weather'>
            <div className='widget-weather_temperature'>{temperature} °C</div>
            <img src={weatherIconPath} alt='weather icon'></img>
            <div className='widget-weather_description'>{description}</div>
          </div>
          <hr></hr>
          <div className='widget-time'></div>
        </div>
      </div>
    );
  }
}