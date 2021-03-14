import React, { Component } from 'react';
import Header from '../Header/Header';


import { TCountries } from '../../types/types';

export default class MainPage extends Component {
  constructor(props: {country: TCountries}) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {


    return (
      <>
        <Header />
        {/* <CountriesCards />
        <Footer /> */}
      </>
    );
  }
}