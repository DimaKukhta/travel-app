import React, { Component } from 'react';
import Header from '../Header/Header';
import CountriesCards from './CountriesCards/CountriesCards';
import Footer from '../Footer/Footer';
import './MainPage.css'

export default class MainPage extends Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <CountriesCards />
        <Footer />
      </div>
    );
  }
}