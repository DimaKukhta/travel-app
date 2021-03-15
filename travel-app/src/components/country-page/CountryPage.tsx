import React from 'react';
import { Container, Grid, GridColumn, GridRow } from 'semantic-ui-react'
import './page.css'
import { Video } from './video/Video'
import data from '../../countriesData/data'


class CountryPage extends React.Component {
    [x: string]: any;
    constructor(props: any) {
        super(props)
        this.state  = {
          // whill be lanlg
        }
        this.urlCountry = window.location.pathname.split('/')[2]
    }

    render() {
        const { video, photoURL, overview, capital: { name } } = data[this.urlCountry]

        return (
            <div className='country_page_wrapper'>
                <Grid  centered>
                    <GridColumn width={3} className='left_bar_wrapper'>
                        <Container  className='container_border_none'>
                            <h1>Left</h1>
                        </Container>
                    </GridColumn>

                    <GridColumn width={13} textAlign='center'>
                        {/* <h1>{this.props.counryPageProps.head}</h1> */}
                        <h1>{data[this.urlCountry].country.en}</h1>

                        <Grid textAlign='center' >
                            <GridRow columns={2}>
                                <GridColumn width={6} className='wraper_2capital_img'>
                                    <Container className='wraper_capita_limg'>
                                        <img className='capital_img' src={photoURL} alt="Capital" />
                                    </Container>
                                </GridColumn>
                                <GridColumn width={8} >
                                    <h4>{name.en}</h4>
                                    <Container >
                                        <p>{overview.en}</p>
                                    </Container>
                                </GridColumn>
                            </GridRow>
                        </Grid>
                        <GridRow>
                            <Container>
                                <div className="slider_wrapper">SLIDER</div>
                            </Container>
                        </GridRow>
                        <Grid >
                            <GridRow id='video' width={7}>
                                <Video src={video}></Video>
                            </GridRow>
                            <GridRow id='map' width={7}>MAP</GridRow>
                        </Grid>
                    </GridColumn>
                </Grid>
            </div>
        )
    }
};

export default CountryPage;
