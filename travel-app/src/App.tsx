import { type } from 'node:os';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CountryPage from './components/country-page/CountryPage'

function App() {

  const head: string = 'GERMANY'
  const titleImgSrc: string = 'https://smapse.ru/storage/2018/12/34133860-1854685924582132-4255627268174381056-n.jpg'

  return (
    <div className="App">
      <CountryPage head={head} titleImgSrc={titleImgSrc} />
    </div>
  );
}

export default App;
