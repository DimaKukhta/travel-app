import React, { Component } from 'react';
import Header from '../Header/Header';
import CountriesCards from './CountriesCards/CountriesCards';
import CountryPage from '../country-page/CountryPage';
import { SignIn } from '../Header/SignIn/SignIn';
import { Registration } from '../Header/Registration/Registration';
import Footer from '../Footer/Footer';
import { getCurrentLang } from '../../utils/getCurrentLang';

import './MainPage.css';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";


interface MainPageState {
  search: string,
  lang: string,
  user: any,
  isAuthorized: boolean
}

export default class MainPage extends Component<{}, MainPageState> {
  state: MainPageState = {
    search: '',
    lang: getCurrentLang(),
    user: {},
    isAuthorized: false
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

  signIn = (user: any): void => {
    this.setState({
      user,
      isAuthorized: true
    })
  }

  logout = (): void => {
    this.setState({
      user: {},
      isAuthorized: false
    });
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
  }

  authorization = async () => {
    const response = await fetch('https://travel-app-be1.herokuapp.com/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ token: localStorage.getItem('token') }),
    });

    const result = await response.json();
    this.signIn(result);
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.authorization();
    }
  }

  componentWillUnmount() {

  }

  render() {
    const { search, lang } = this.state;

    return (
      <div className='container'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header
                updateSearch={this.updateSearch}
                updateLang={this.updateLang}
                hasSearch={true}
                isAuthorized={this.state.isAuthorized}
                logout={this.logout} user={this.state.user}
                lang={lang} />
              <CountriesCards search={search} lang={lang} />
            </Route>
            <Route path="/country">
              <Header
                hasSearch={false}
                updateLang={this.updateLang}
                isAuthorized={this.state.isAuthorized}
                logout={this.logout}
                user={this.state.user}
                lang={lang}
              />
              <CountryPage lang={lang} isAuthorized={this.state.isAuthorized}/>
            </Route>
            <Route path="/login">
              <Header
                hasSearch={false}
                updateLang={this.updateLang}
                isAuthorized={this.state.isAuthorized}
                logout={this.logout}
                user={this.state.user}
                lang={lang} />
              <SignIn signIn={this.signIn} lang={lang}/>
            </Route>
            <Route path="/registration">
              <Header
                hasSearch={false}
                updateLang={this.updateLang}
                isAuthorized={this.state.isAuthorized}
                logout={this.logout}
                user={this.state.user}
                lang={lang} />
              <Registration signIn={this.signIn} lang={lang}/>
            </Route>
          </Switch>
          {this.state.isAuthorized ? <Redirect from="/login" to="/" /> : null}
          {this.state.isAuthorized ? <Redirect from="/registration" to="/" /> : null}
          <Footer lang={lang} />
        </BrowserRouter>
      </div >

    );
  }
}