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
  }

  componentDidMount() {

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
          <Header updateSearch={this.updateSearch} hasSearch={true} isAuthorized={this.state.isAuthorized} logout={this.logout}/>
              <CountriesCards search={search} />
            </Route>
            <Route path="/country">
          <Header hasSearch={false} isAuthorized={this.state.isAuthorized} logout={this.logout}/>

              <CountryPage />
            </Route>
            <Route path="/login">
              <Header hasSearch={false} isAuthorized={this.state.isAuthorized} logout={this.logout}/>
              <SignIn signIn={this.signIn}/>
            </Route>
            <Route path="/registration">
              <Header hasSearch={false} isAuthorized={this.state.isAuthorized} logout={this.logout}/>
              <Registration signIn={this.signIn}/>
            </Route>
          </Switch>
          {this.state.isAuthorized ? <Redirect from="/login" to="/" /> : null}
          {this.state.isAuthorized ? <Redirect from="/registration" to="/" /> : null}
          <Footer />

        </BrowserRouter>
      </div >

    );
  }
}