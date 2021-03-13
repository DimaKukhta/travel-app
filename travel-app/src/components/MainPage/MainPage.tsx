export {}
// import React, { Component } from 'react';


// import { TCountries, currencies } from '../../types/types';

// export default class MainPage extends Component<{country: TCountries}, {[key: string]: any}> {
//   constructor(props: {country: TCountries}) {
//     super(props)
//     this.state = {
//       currencyData: null,
//       weatherData: null,
//       time: new Date(),
//     }
//   }

//   async componentDidMount() {
//     const {country} = this.props;

//     // fetching currency
//     try {
//       const result = await getCurrencyRatesForCountry(country);
//       this.updateCurrencyData(result);
//     } catch (e) {
//       this.updateCurrencyData(e);
//     }

//     // fetching weather
//     try {
//       const result = await getWeatherDataForCountry(country);
//       this.updateWeatherData(result);
//     } catch (e) {
//       this.updateWeatherData(e);
//     }
//   }

//   updateWeatherData = (data: object): void => {
//     this.setState({
//       weatherData: data,
//     })
//   }

//   updateCurrencyData = (data: object): void => {
//     this.setState({
//       currencyData: data,
//     })
//   }

//   render() {
//     const {country} = this.props;
//     const countryCurrency = currencies[country];
//     const { weatherData } = this.state;

//     const hasCurrencyResponse = this.state.currencyData !== null;
//     const hasWeatherResponse = this.state.weatherData !== null;

//     const rates = hasCurrencyResponse ? this.state.currencyData.rates : null;
//     const timezone = hasWeatherResponse ? this.state.weatherData.timezone : 0;

//     return (
//       <div>
//         <div className='widget'>
//           <div>{`${country} (${countryCurrency})`}</div>
//           <Currency rates={rates}/>
//           <hr></hr>
//           <Weather country={country} weatherData={weatherData}/>
//           <hr></hr>
//           <Clock timezone={timezone}/>
//         </div>
//       </div>
//     );
//   }
// }