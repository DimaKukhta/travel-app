import React, { Component, createRef } from 'react';
import { Select, Button, Icon } from 'semantic-ui-react'
import { languages } from '../../types/types'
import logo from '../../assets/images/logo.png';
import './Header.css'

interface HeaderProps {
  updateSearch: (input: string) => void;
  textInput?: HTMLInputElement,
}

export default class Header extends Component<HeaderProps, {}> {
  private textInput = createRef<HTMLInputElement>();

  handleChange = ({ target }: any): void => {
    const { value } = target;
    this.props.updateSearch(value);
  }

  componentDidMount() {
    const elem = this.textInput.current;
    elem?.focus();
  }

  render() {
    return (
      <div className='header'>
        <a href='/'>
          <img className='header_logo' src={logo} alt='logo'></img>
        </a>
        <Select className='header_lang' placeholder='Select language' options={languages} />
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
        <div>
          <Button color='blue'>Sign in</Button>
          <Button color='yellow'>Registration</Button>
        </div>
      </div>
    );

  }
}