// import Card from './Card/Card'
import { Card, Image } from 'semantic-ui-react'
import './CountriesCards.css'

import data from '../../../countriesData/data'
import { NavLink } from 'react-router-dom';

interface CountriesCardsProps {
  search: string;
}

export default function CountriesCards({search}: CountriesCardsProps) {
  const dataArray = Object.values(data);
  const isMainEmpty = [...dataArray].every(({country, capital: { name }}) => {
    return !(country.en.toLowerCase().includes(search.toLowerCase())
      || name.en.toLowerCase().includes(search.toLowerCase()))
  });
 
  function getSelectSearchClass(val: string, isCountryFind: boolean): string {
    const isSearchEmpty = val === '';
    if (isSearchEmpty) {
      return '';
    }
    return isCountryFind ? 'succes-search' : '';
  }

  return (
    <div className='main'>
      { isMainEmpty ? <div>No data available for this search query...</div> : 
        [...dataArray].map(countryObj => {
          const { photoURL, country, capital: { name } } = countryObj;
          const isSearchSucces = [country.en, name.en].some( elem => elem.toLowerCase().includes(search.toLowerCase()));
          const isCountryFind = country.en.toLowerCase().includes(search.toLowerCase());

          return (
            <>
            {isSearchSucces && <Card
                key={country}
                className={`country-card`}
                data-country={country.en}
                >
                  <NavLink to={`/country/${country}`}>
                <Image src={photoURL} />
                <Card.Content>
                  <Card.Description>
                    <b className={getSelectSearchClass(search, isCountryFind)}>{country.en}</b>
                  </Card.Description>
                  <Card.Description>
                    <em className={getSelectSearchClass(search, !isCountryFind)}>{name.en}</em>
                  </Card.Description>
                </Card.Content>
                </NavLink>
              </Card>}
            </>
          )
        })
      }
    </div>
  )
}