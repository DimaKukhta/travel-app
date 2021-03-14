// import Card from './Card/Card'
import { Card, Image } from 'semantic-ui-react'
import './CountriesCards.css'

import data from '../../../countriesData/data'

interface CountriesCardsProps {
  search: string;
}

export default function CountriesCards({search}: CountriesCardsProps) {

  const isMainEmpty = [...data].every(({country, capital: { name }}) => {
    return !(country.toLowerCase().includes(search.toLowerCase())
      || name.toLowerCase().includes(search.toLowerCase()))
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
        [...data].map(countryObj => {
          const { photoURL, country, capital: { name } } = countryObj;
          const isSearchSucces = [country, name].some( elem => elem.toLowerCase().includes(search.toLowerCase()));
          const isCountryFind = country.toLowerCase().includes(search.toLowerCase());

          return (
            <>
            {isSearchSucces && <Card
                key={country}
                className={`country-card`}
                href='/'
                >
                <Image src={photoURL} />
                <Card.Content>
                  <Card.Description>
                    <b className={getSelectSearchClass(search, isCountryFind)}>{country}</b>
                  </Card.Description>
                  <Card.Description>
                    <em className={getSelectSearchClass(search, !isCountryFind)}>{name}</em>
                  </Card.Description>
                </Card.Content>
              </Card>}
            </>
          )
        })
      }
    </div>
  )
}