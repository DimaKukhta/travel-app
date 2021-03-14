import React from 'react';
import { Container, Grid, GridColumn, GridRow } from 'semantic-ui-react'
import './page.css'
import { Video } from './video/Video'

interface I_CountryPage {
    counryPageProps: {
        head: string
        titleImgSrc: string
        capital: string
        videoSrc: string
        countryInfo: string
    }
}

class CountryPage extends React.Component<I_CountryPage> {
    constructor(props: I_CountryPage) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='country_page_wrapper'>
                <Grid celled centered>
                    <Grid.Column width={3} className='left_bar_wrapper'>
                        <Container >
                            <h1>Left</h1>
                        </Container>
                    </Grid.Column>

                    <Grid.Column width={13} textAlign='center'>
                        <h1>Country {this.props.counryPageProps.head}</h1>
                        <Grid celled textAlign='center' >
                            <GridRow columns={2}>
                                <Grid.Column width={6} className='wraper_2capital_img'>
                                    <Container className='wraper_capita_limg'>
                                        <img className='capital_img' src={this.props.counryPageProps.titleImgSrc} alt="Capital" />
                                    </Container>
                                </Grid.Column>
                                <Grid.Column width={8} >
                                    <h4>Capital {this.props.counryPageProps.capital}</h4>
                                    <Container >
                                        <p>{this.props.counryPageProps.countryInfo}</p>
                                    </Container>
                                </Grid.Column>
                            </GridRow>
                        </Grid>
                        <GridRow>
                            <Container>
                                <div className="slider_wrapper">SLIDER</div>
                            </Container>
                        </GridRow>
                        <Grid celled>
                            <GridRow id='video' width={7}>
                                <Video src={this.props.counryPageProps.videoSrc}></Video>
                            </GridRow>
                            <GridRow id='map' width={7}>MAP</GridRow>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
};

export default CountryPage;
