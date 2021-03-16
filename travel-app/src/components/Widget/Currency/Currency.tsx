import React, { Component, Fragment } from 'react';

export default class Currency extends Component<{[key: string]: any}> {

  render() {
    const { rates } = this.props;
    const currenciesArray: string[] = ['EUR', 'USD', 'BYN'];

    if (!rates) return (<div>no currency data</div>)

    const rateArray = currenciesArray.map( curr => {
      const rate = rates[curr];

      if (rate < 1) {
        const group = 10 ** (`${Math.trunc(1/rate)}`.length - 1);
        return `${group} : ${(rate*group).toFixed(3)} ${curr}`
      }
      return `1: ${rate.toFixed(3)} ${curr}`;
    })

    return (
      <div className='widget-currency'>
        <Fragment>
          {rateArray.map((curr, index) => (
            <div key={index} className={`widget-currency__${currenciesArray[index]}`}>{curr}</div>
          ))}
        </Fragment>
      </div>
    )
  }
}
