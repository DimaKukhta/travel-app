import React, { Component, PropsWithChildren } from 'react';
import Header from '../Header/Header';
import CountriesCards from './CountriesCards/CountriesCards';
import CountryPage from '../country-page/CountryPage';
import { SignIn } from '../Header/SignIn/SignIn';
import { Registration } from '../Header/Registration/Registration';
import Footer from '../Footer/Footer';
import './MainPage.css';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";


interface MainPageState {
  search: string,
  user: any,
  isAuthorized: boolean
}

export default class MainPage extends Component<{}, MainPageState> {
  state = {
    search: '',
    user: {},
    isAuthorized: false
  }

  updateSearch = (input: string): void => {
    this.setState({
      search: input
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
    const { search } = this.state;

    return (
      <div className='container'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header updateSearch={this.updateSearch} hasSearch={true} isAuthorized={this.state.isAuthorized} logout={this.logout} user={this.state.user} />
              <CountriesCards search={search} />
              <Footer />
            </Route>
            <Route path="/country">
              <Header hasSearch={false} isAuthorized={this.state.isAuthorized} logout={this.logout} user={this.state.user} />

              <CountryPage />
              <Footer padding={true}/>
            </Route>
            <Route path="/login">
              <Header hasSearch={false} isAuthorized={this.state.isAuthorized} logout={this.logout} user={this.state.user} />
              <SignIn signIn={this.signIn} />
              <Footer />
            </Route>
            <Route path="/registration">
              <Header hasSearch={false} isAuthorized={this.state.isAuthorized} logout={this.logout} user={this.state.user} />
              <Registration signIn={this.signIn} />
              <Footer />
            </Route>
          </Switch>
          {this.state.isAuthorized ? <Redirect from="/login" to="/" /> : null}
          {this.state.isAuthorized ? <Redirect from="/registration" to="/" /> : null}
        </BrowserRouter>
      </div >

    );
  }
}