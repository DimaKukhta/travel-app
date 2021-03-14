// import Card from './Card/Card'
import { Card, Image } from 'semantic-ui-react'
import './CountriesCards.css'

import data from '../../../countriesData/data'
import { NavLink } from 'react-router-dom';

export default function CountriesCards() {

  return (
    <div className='main'>
      {data.map(countryObj => {
        const { photoURL, country, capital: { name } } = countryObj;

        return (
          <Card
            key={country}
            className='country-card'
          >
            <NavLink to={`/country/${country}`}>
              <Image src={photoURL} />
              <Card.Content>
                <Card.Description>
                  <b>{country}</b>
                </Card.Description>
                <Card.Description>
                  <em>{name}</em>
                </Card.Description>
              </Card.Content>
            </NavLink>
          </Card>
        )
      })}
    </div>
  )
}