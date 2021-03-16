// import Card from './Card/Card'
import { Card, Image } from "semantic-ui-react";
import "./CountriesCards.css";

import data from "../../../countriesData/data";
import { NavLink } from "react-router-dom";

interface CountriesCardsProps {
  search: string;
}

export default function CountriesCards({ search }: CountriesCardsProps) {
  const dataArray = Object.values(data);
  const isMainEmpty = [...dataArray].every(({ country, capital: { name } }) => {
    return !(
      country.en.toLowerCase().includes(search.toLowerCase()) ||
      name.en.toLowerCase().includes(search.toLowerCase())
    );
  });

  function getSelectSearchClass(val: string, isCountryFind: boolean): string {
    const isSearchEmpty = val === "";
    if (isSearchEmpty) {
      return "";
    }
    return isCountryFind ? "succes-search" : "";
  }

  return (
    <div className="main">
      {isMainEmpty ? (
        <div>No data available for this search query...</div>
      ) : (
        [...dataArray].map((countryObj) => {
          const {
            photoURL,
            country,
            capital: { name },
          } = countryObj;
          const isSearchSucces = [country.en, name.en].some((elem) =>
            elem.toLowerCase().includes(search.toLowerCase())
          );
          const isCountryFind = country.en
            .toLowerCase()
            .includes(search.toLowerCase());

          return (
            <div className="card">
              {isSearchSucces && (
                <div
                  key={country.en}
                  className={`country_card`}
                  data-country={country.en}
                >
                  <NavLink to={`/country/${country.en}`}>
                    <Image src={photoURL} />
                    <div className="card_description">
                      <b
                        className={`${getSelectSearchClass(
                          search,
                          isCountryFind
                        )} card_country_name`}
                      >
                        {country.en}
                      </b>

                      <em
                        className={`${getSelectSearchClass(
                          search,
                          !isCountryFind
                        )} card_country_capital`}
                      >
                        {name.en}
                      </em>
                    </div>
                  </NavLink>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
