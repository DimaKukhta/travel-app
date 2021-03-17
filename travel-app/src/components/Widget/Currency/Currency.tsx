import React, { Component, Fragment } from 'react';

interface CurrencyProps {
  [key: string]: any,
  lang: string,
}

export default class Currency extends Component<CurrencyProps> {

  render() {
    const { rates, lang } = this.props;
    const currenciesArray: {[key: string]: string[]} = { 
      en:['EUR', 'USD', 'BYN'],
      ru:['Евро', 'Доллар США', 'Бел. рубль'],
      be:['Еўра', 'Даляр ЗША', 'Бел. рубль']
    };

    if (!rates) return (<div>no data</div>)

    const rateArray = currenciesArray.en.map( curr => {
      const rate = rates[curr];

      if (rate < 1) {
        const group = 10 ** (`${Math.round(1/rate)}`.length - 1);
        return `${group} : ${(rate*group).toFixed(3)}`
      }
      return `1: ${rate.toFixed(3)}`;
    })

    return (
      <div className='widget-currency'>
        <Fragment>
          {rateArray.map((curr, index) => (
            <div key={index} >{curr} {currenciesArray[lang][index]}</div>
          ))}
        </Fragment>
      </div>
    )
  }
}
