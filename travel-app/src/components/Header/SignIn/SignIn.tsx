import React, { useState } from 'react';
import translate from '../../../translateData/translate';
import './signIn.css';

interface SignInProps {
  signIn: (user: any) => void;
  lang: string;
}

export const SignIn = (props: SignInProps) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLoginInput = (e: any) => {
    setLogin(e.target.value);
  }

  const handlePasswordInput = (e: any) => {
    setPassword(e.target.value);
  }

  const sigInResponse = async (user: any) => {
    setLoading(true);
    const response = await fetch('https://travel-app-be1.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    setLoading(false);
    if (!result.message) {
      props.signIn(result);
      localStorage.setItem('token', result.token);
    } else {
      localStorage.removeItem('token');
    }
  }

  const handleButtonSubmit = async (e: any, login: string, password: string) => {
    e.preventDefault();
    const user = {
      login,
      password,
    }
    sigInResponse(user);
  };

  const { lang } = props;

  return (
    <div className="main">
      <form className={`ui form sign-in-form ${loading ? 'loading' : ''}`}>
        <div className="field">
          <h2>{translate.signIn.head[lang]}</h2>
          <label>
            {translate.signIn.login[lang]}
          </label>
          <input placeholder={`${translate.signIn.login[lang]}`} value={login} onChange={handleLoginInput} />
        </div>
        <div className="field">
          <label>{translate.signIn.password[lang]}</label>
          <input placeholder={`${translate.signIn.password[lang]}`} value={password} onChange={handlePasswordInput} />
        </div>
        <button type="submit" className="ui button" onClick={(e) => handleButtonSubmit(e, login, password)}>{translate.signIn.submit[lang]}</button>
      </form>
    </div>
  )
}