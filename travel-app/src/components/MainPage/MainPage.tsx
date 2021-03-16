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

    return (
      <div className='container'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
          <Header updateSearch={this.updateSearch} hasSearch={true}/>
              <CountriesCards search={search} />
            </Route>
            <Route path="/country">
          <Header hasSearch={false}/>

              <CountryPage />
            </Route>
          </Switch>
          <Footer />

        </BrowserRouter>
      </div >

    );
  }
}