import React from "react";
import { Container, Grid, GridColumn, GridRow } from "semantic-ui-react";
import "./page.css";
import { Video } from "./video/Video";
import data from "../../countriesData/data";
import Gallery from "../Gallery";
import Widget from "../Widget/Widget";
import MapComponent from "../Map";
import { RatingOfPlace } from './RatingOfPlace/RatingOfPlace'; 

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
        <Grid centered>
          <GridColumn width={3} className="left_bar_wrapper">
            <Container className="container_border_none">
              <Widget country={this.urlCountry} />
            </Container>
          </GridColumn>

          <GridColumn width={13} textAlign="center">
            {/* <h1>{this.props.counryPageProps.head}</h1> */}
            <h1>{data[this.urlCountry].country.en}</h1>

            <Grid textAlign="center">
              <GridRow columns={2}>
                <GridColumn width={6} className="wraper_2capital_img">
                  <Container className="wraper_capita_limg">
                    <img className="capital_img" src={photoURL} alt="Capital" />
                  </Container>
                </GridColumn>
                <GridColumn width={8}>
                  <h4>{name.en}</h4>
                  <Container>
                    <p>{overview.en}</p>
                  </Container>
                </GridColumn>
              </GridRow>
            </Grid>
            <GridRow>
              <Container>
                <div className="slider_wrapper">
                  <Gallery countryName={this.urlCountry} />
                </div>
                <RatingOfPlace></RatingOfPlace>
              </Container>
            </GridRow>
            <Grid>
              <GridRow id="video" width={7}>
                <Video src={video}></Video>
              </GridRow>
              <GridRow id="map" width={7}>
                <MapComponent countryName={this.urlCountry} />
              </GridRow>
            </Grid>
          </GridColumn>
        </Grid>
      </div>
    );
  }
}

export default CountryPage;
