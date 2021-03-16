import React, { Component } from 'react';
import Currency from './Currency/Currency';
import Weather from './Weather/Weather';
import Clock from './Clock/Clock';

import { TCountries, currencies } from '../../types/types';
import { getCurrencyRatesForCountry, getWeatherDataForCountry } from '../../api/getWidgetData';

import './widget.css'

interface CountriesProps {
  country: TCountries,
  lang: string,
}

export default class Widget extends Component<CountriesProps, {[key: string]: any}> {
  constructor(props: CountriesProps) {
    super(props)
    this.state = {
      currencyData: null,
      weatherData: null,
      time: new Date(),
    }
  }

  async componentDidMount() {
    const {country, lang} = this.props;

    // fetching currency
    try {
      const result = await getCurrencyRatesForCountry(country);
      console.log(result)
      this.updateCurrencyData(result);
    } catch (e) {
      this.updateCurrencyData(e);
    }

    // fetching weather
    try {
      const result = await getWeatherDataForCountry(country, lang);
      this.updateWeatherData(result);
    } catch (e) {
      this.updateWeatherData(e);
    }
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
    const {country, lang} = this.props;
    const countryCurrency = currencies[country];
    const { weatherData } = this.state;

    const hasCurrencyResponse = this.state.currencyData !== null;
    const hasWeatherResponse = this.state.weatherData !== null;

    const rates = hasCurrencyResponse ? this.state.currencyData.rates : null;
    const timezone = hasWeatherResponse ? this.state.weatherData.timezone : 0;

    return (
      <div>
        <div className='widget'>
          <div>{`${country} (${countryCurrency})`}</div>
          <Currency rates={rates}/>
          <hr></hr>
          <Weather country={country} weatherData={weatherData} lang={lang}/>
          <hr></hr>
          <Clock timezone={timezone} lang={lang}/>
        </div>
      </div>
    );
  }
}