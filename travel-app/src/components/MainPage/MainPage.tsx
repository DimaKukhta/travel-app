import React, { Component } from 'react';
import Header from '../Header/Header';
import CountriesCards from './CountriesCards/CountriesCards';
import Footer from '../Footer/Footer';
import './MainPage.css'

interface MainPageState {
  search: string,
}

export default class MainPage extends Component<{}, MainPageState> {
  state = {
    search: '',
  }

  updateSearch = (input: string): void => {
    this.setState({
      search: input
    })
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const { search } = this.state;

    return (
      <div className='container'>
        <Header updateSearch={this.updateSearch}/>
        <CountriesCards search={search}/>
        <Footer />
      </div>
    );
  }
}