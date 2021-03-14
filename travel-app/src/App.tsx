import React from 'react';
import './App.css';
import CountryPage from './components/country-page/CountryPage'

function App() {
  const counryPageProps = {
    head: 'Germany', 
    titleImgSrc: 'https://smapse.ru/storage/2018/12/34133860-1854685924582132-4255627268174381056-n.jpg',
    capital: 'Berlin',
    videoSrc: 'https://www.youtube.com/watch?v=UK6x7pGBYnw&t=2373s',
    countryInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ipsam facilis harum! Quia eaque corrupti, eligendi atque perspiciatis architecto beatae quam officia perferendis modi, corporis eos voluptate qui nihil molestias.',

  };

  return (
    <div className="App">
      <CountryPage counryPageProps={counryPageProps} />
    </div>
  );
}

export default App;
