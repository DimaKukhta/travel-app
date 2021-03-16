import React from "react";
import "./page.css";
import { Video } from "./video/Video";
import data from "../../countriesData/data";
import Gallery from "../Gallery";
import Widget from "../Widget/Widget";
import MapComponent from "../Map";

class CountryPage extends React.Component {
  [x: string]: any;
  constructor(props: any) {
    super(props);
    this.state = {
      // whill be lanlg
    };
    this.urlCountry = window.location.pathname.split("/")[2];
  }

  render() {
    const {
      video,
      photoURL,
      overview,
      capital: { name },
    } = data[this.urlCountry];

    return (
      <div className="country_page_wrapper">
        <div className="widget_wrapper">
          <div className="widget_container">
            <Widget country={this.urlCountry} />
          </div>
        </div>
        <div className="country_info_wrapper">
          <div className="country_info_container">
            <h1 className="country_name">{data[this.urlCountry].country.en}</h1>
            <div className="capital_description_container">
              <div className="capital_img_container">
                <img className="capital_img" src={photoURL} alt="Capital" />
              </div>
              <div className="capital_description">
                <h4 className="capital_name"> ◽ {name.en} ◽ </h4>
                <p className="capital_overview">{overview.en}</p>
              </div>
            </div>
          </div>
          <div className="slider_container">
            <Gallery countryName={this.urlCountry} />
          </div>
          <div className="video_container">
            <Video src={video}></Video>
          </div>
          <div className="map_container">
            <MapComponent countryName={this.urlCountry} />
          </div>
        </div>
      </div>
    );
  }
}

export default CountryPage;
