import React, { Component, createRef } from 'react';
import { Select, Button, Icon } from 'semantic-ui-react'
import { languagesOptions } from '../../types/types'
import translate from '../../translateData/translate';
import logo from '../../assets/images/logo.png';
import './Header.css'
import { NavLink } from 'react-router-dom';


interface HeaderProps {
  updateSearch?: (input: string) => void;
  updateLang?: (lang: string) => void;
  hasSearch: boolean,
  lang: string,
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
    const isLangSetup = localStorage.getItem('lang');
    if (!isLangSetup) {
      localStorage.setItem('lang', 'en');
    }
  }

  addLangToUrl = ({ target }: any) => {
    languagesOptions.forEach((lang: any) => {
      if (lang.text === target.textContent) {
        localStorage.setItem('lang', `${lang.value}`);
        if (this.props.updateLang) {
          this.props.updateLang(lang.value);
        }
      }
    });
  }

  render() {
    const { hasSearch, lang } = this.props;

    return (
      <div className='header'>
        <NavLink to=''>
          <img className='header_logo' src={logo} alt='logo'></img>
        </NavLink>
        <Select 
          className='header_lang'
          placeholder={translate.header.select[lang]}
          options={languagesOptions}
          onChange={this.addLangToUrl} />

        { hasSearch &&
          <div>
            <input
              type='search'
              ref={this.textInput}
              onChange={this.handleChange}
              className='header_search'
              placeholder={translate.header.search[lang]}
            />
            <Button icon>
              <Icon name='search' />
            </Button>
          </div>
        }
        <div>
          <Button color='blue'>{translate.header.singIn[lang]}</Button>
          <Button color='yellow'>{translate.header.registration[lang]}</Button>
        </div>
      </div>
    );

  }
}