import React, { Component } from 'react';
import Header from '../Header/Header';
import CountriesCards from './CountriesCards/CountriesCards';
import CountryPage from '../country-page/CountryPage'
import Footer from '../Footer/Footer';
import { getCurrentLang } from '../../utils/getCurrentLang';

import './MainPage.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";


interface MainPageState {
  search: string,
  lang: string,
}

export default class MainPage extends Component<{}, MainPageState> {
  state: MainPageState = {
    search: '',
    lang: getCurrentLang(),
  }

  updateSearch = (input: string): void => {
    this.setState({
      search: input,
    })
  }

  updateLang = (lang: string): void => {
    this.setState({
      lang: lang,
    })
  }

  render() {
    const { search, lang } = this.state;

    return (
      <div className='container'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header updateSearch={this.updateSearch} updateLang={this.updateLang} hasSearch={true} lang={lang} />
              <CountriesCards search={search} lang={lang}/>
            </Route>
            <Route path="/country">
              <Header hasSearch={false} updateLang={this.updateLang} lang={lang} />
              <CountryPage lang={lang}/>
            </Route>
            {/* <Route path="/login">
              <Header hasSearch={false} updateLang={this.updateLang} lang={lang}/>
              //TODO: registration form
              <div className='main'>Registration form</div>
            </Route> */}
          </Switch>
          <Footer lang={lang}/>
        </BrowserRouter>
      </div >

    );
  }
}