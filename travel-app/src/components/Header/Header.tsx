import React, { Component, createRef } from 'react';
import { Select, Button, Icon } from 'semantic-ui-react'
import { languages } from '../../types/types'
import logo from '../../assets/images/logo.png';
import './Header.css'
import { NavLink } from 'react-router-dom';


interface HeaderProps {
  updateSearch?: (input: string) => void;
  hasSearch: boolean,
  isAuthorized: boolean
}

export default class Header extends Component<HeaderProps, {}> {
  private textInput = createRef<HTMLInputElement>();

  handleChange = ({ target }: any): void => {
    const { value } = target;
    if (this.props.updateSearch) {
      this.props.updateSearch(value);
    }
  }

  componentDidMount() {
    const elem = this.textInput.current;
    elem?.focus();
  }

  addLangToUrl = ({ target }: any) => {
    console.log(target)
    languages.forEach((lang: any) => {
      if (lang.text === target.textContent) {
        localStorage.setItem('lang', `${lang.value}`)
      }
    });
  }

  render() {
    const { hasSearch } = this.props;

    return (
      <div className='header'>
        <NavLink to=''>
          <img className='header_logo' src={logo} alt='logo'></img>
        </NavLink>
        <Select className='header_lang' placeholder='Select language' options={languages} onChange={this.addLangToUrl} />
        { hasSearch &&
          <div>
            <input
              type='search'
              ref={this.textInput}
              onChange={this.handleChange}
              className='header_search'
              placeholder='Search...'
            />
            <Button icon>
              <Icon name='search' />
            </Button>
          </div>
        }
        <div>
          {this.props.isAuthorized 
          ? <button>Logout</button>
          : <div>
            <NavLink to="/login"color='blue'>Sign in</NavLink>
            <NavLink to="/reg"color='yellow'>Registration</NavLink>
          </div>
          }
        </div>
      </div>
    );

  }
}