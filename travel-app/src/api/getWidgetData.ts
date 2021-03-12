'https://api.exchangerate.host/latest?base=JPY'

import { currencies, TCountries, capitals } from '../types/types';

export function getCurrencyRatesForCountry(country: TCountries) {
  const CURRENCY_BASE_URL ='https://api.exchangerate.host';
  const CURRENCY_SEARCH_PATH ='/latest';
  const CURRENCY_SEARCH_PARAM ='base=';
  const CURRENCY_SEARCH_QUERY = currencies[country];

  return fetch(`${CURRENCY_BASE_URL}${CURRENCY_SEARCH_PATH}?${CURRENCY_SEARCH_PARAM}${CURRENCY_SEARCH_QUERY}`)
    .then(response => response.json())
}

export function getWeatherDataForCountry(country: TCountries) {
  const countryCapital = capitals[country];

  const WEATHER_BASE_URL ='http://api.openweathermap.org';
  const WEATHER_SEARCH_PATH ='/data/2.5/weather';
  const WEATHER_SEARCH_QUERY = countryCapital;
  const WEATHER_SEARCH_PARAM =`q=${WEATHER_SEARCH_QUERY}&units=metric&appid=`;
  const WEATHER_API_KEY ='74b721a02a61edbbd2564e83bdc1f207';

  return fetch(`${WEATHER_BASE_URL}${WEATHER_SEARCH_PATH}?${WEATHER_SEARCH_PARAM}${WEATHER_API_KEY}`)
    .then(response => response.json())
}


