import React, { Component, Fragment } from 'react';

export default class Currency extends Component<{[key: string]: any}> {

  render() {
    const { rates } = this.props;
    const currenciesArray: string[] = ['EUR', 'USD', 'BYN'];

    return (
      <div className='widget-currency'>
        <Fragment>
          {currenciesArray.map(curr => (
            <div key={curr} className={`widget-currency__${curr}`}>1 : {rates && (rates[curr]).toFixed(3)} {curr}</div>
          ))}
        </Fragment>
      </div>
    )
  }
}
