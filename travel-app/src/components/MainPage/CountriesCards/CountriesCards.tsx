// import Card from './Card/Card'
import { Card, Image } from 'semantic-ui-react'
import './CountriesCards.css'

import data from '../../../countriesData/data'
import translate from '../../../translateData/translate'
import { NavLink } from 'react-router-dom';

interface CountriesCardsProps {
  search: string;
  lang: string
}

const CountriesCards: React.FC<CountriesCardsProps> = (props) => { 
  const { search, lang } = props;

  const dataArray = Object.values(data);
  const isMainEmpty = [...dataArray].every(({country, capital: { name }}) => {
    const isCountryFind = country[lang].toLowerCase().includes(search.toLowerCase());
    const isCapitalFind = name[lang].toLowerCase().includes(search.toLowerCase());
    return ! (isCountryFind || isCapitalFind);
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
      { isMainEmpty ? <div>{translate.CountriesCards.emptySearch[lang]}</div> : 
        [...dataArray].map(countryObj => {
          const { photoURL, country, capital: { name } } = countryObj;
          const isSearchSucces = [country[lang], name[lang]].some( elem => elem.toLowerCase().includes(search.toLowerCase()));
          const isCountryFind = country[lang].toLowerCase().includes(search.toLowerCase());

          return (
            <>
            {isSearchSucces && <Card
                key={country.en}
                className={`country-card`}
                data-country={country.en}
                >
                  <NavLink to={`/country/${country.en}`}>
                <Image src={photoURL} />
                <Card.Content>
                  <Card.Description>
                    <b className={getSelectSearchClass(search, isCountryFind)}>{country[lang]}</b>
                  </Card.Description>
                  <Card.Description>
                    <em className={getSelectSearchClass(search, !isCountryFind)}>{name[lang]}</em>
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

export default CountriesCards;