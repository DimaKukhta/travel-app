import React, { Component, PropsWithChildren } from 'react';
import Header from '../Header/Header';
import CountriesCards from './CountriesCards/CountriesCards';
import CountryPage from '../country-page/CountryPage'
import Footer from '../Footer/Footer';
import './MainPage.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";


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
    const counryPageProps = {
      head: 'Germany',
      titleImgSrc: 'https://smapse.ru/storage/2018/12/34133860-1854685924582132-4255627268174381056-n.jpg',
      capital: 'Berlin',
      videoSrc: 'https://www.youtube.com/watch?v=UK6x7pGBYnw&t=0s',
      countryInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ipsam facilis harum! Quia eaque corrupti, eligendi atque perspiciatis architecto beatae quam officia perferendis modi, corporis eos voluptate qui nihil molestias.',
    }
    return (
      <div className='container'>
        <BrowserRouter>
          <Header updateSearch={this.updateSearch} />
          <Switch>
            <Route exact path="/">
              <CountriesCards search={search} />
            </Route>
            <Route path="/country">
              <CountryPage counryPageProps={counryPageProps} />
            </Route>
          </Switch>
          <Footer />

        </BrowserRouter>
      </div >

    );
  }
}