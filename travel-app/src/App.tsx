import React from 'react';
import './App.css';
import CountryPage from './components/country-page/CountryPage'

function App() {
  const counryPageProps = {
    head: 'Germany', 
    titleImgSrc: 'https://smapse.ru/storage/2018/12/34133860-1854685924582132-4255627268174381056-n.jpg',
    capital: 'Berlin',
  };

  return (
    <div className="App">
      <CountryPage counryPageProps={counryPageProps} />
    </div>
  );
}

export default App;
