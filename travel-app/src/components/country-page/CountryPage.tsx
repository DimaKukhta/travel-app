import React from "react";
import { Container, Grid, GridColumn, GridRow } from "semantic-ui-react";
import "./page.css";
import { Video } from "./video/Video";
import data from "../../countriesData/data";
import Gallery from "../Gallery";
import Widget from "../Widget/Widget";
import MapComponent from "../Map";
import { RatingOfPlace } from './RatingOfPlace/RatingOfPlace'; 

interface CountryPageProps {
  lang: string,
  isAuthorized: boolean
}

interface CountryPageState {
  imgId: number
}

class CountryPage extends React.Component<CountryPageProps, CountryPageState> {
  [x: string]: any;
  constructor(props: CountryPageProps) {
    super(props);
    this.state = {
      imgId: 0
    };
    this.urlCountry = window.location.pathname.split("/")[2];
  }

  setImgId = (value: number) => {
    this.setState({
      imgId: value
    });
  }

  render() {
    const { lang } = this.props;
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
              <Widget country={this.urlCountry} lang={lang}/>
            </Container>
          </GridColumn>

          <GridColumn width={13} textAlign="center">
            <h1>{data[this.urlCountry].country[lang]}</h1>

            <Grid textAlign="center">
              <GridRow columns={2}>
                <GridColumn width={6} className="wraper_2capital_img">
                  <Container className="wraper_capita_limg">
                    <img className="capital_img" src={photoURL} alt="Capital" />
                  </Container>
                </GridColumn>
                <GridColumn width={8}>
                  <h4>{name[lang]}</h4>
                  <Container>
                    <p>{overview[lang]}</p>
                  </Container>
                </GridColumn>
              </GridRow>
            </Grid>
            <GridRow>
              <Container>
                <div className="slider_wrapper">
                  <Gallery countryName={this.urlCountry} lang={lang} imgId={this.state.imgId} setImgId={this.setImgId}/>
                </div>
               <RatingOfPlace imgId={this.state.imgId} isAuthorized={this.props.isAuthorized}></RatingOfPlace>
              </Container>
            </GridRow>
            <Grid>
              <GridRow id="video" width={7}>
                <Video src={video}></Video>
              </GridRow>
              <GridRow id="map" width={7}>
                <MapComponent countryName={this.urlCountry} lang={lang} />
              </GridRow>
            </Grid>
          </GridColumn>
        </Grid>
      </div>
    );
  }
}

export default CountryPage;
