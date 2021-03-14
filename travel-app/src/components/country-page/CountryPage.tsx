import React from 'react';
import { Container, Grid, GridColumn, GridRow } from 'semantic-ui-react'
import './page.css'

interface I_CountryPage {
    // propsXemple: Object
    head: string
    // capital: string
    titleImgSrc: string
}

class CountryPage extends React.Component<I_CountryPage> {
    constructor(props: I_CountryPage | Readonly<I_CountryPage>) {
        super(props)
        console.log(props)
        this.state = {
        }
   
    }

    render() {
        return (
            <div className='country_page_wrapper'>
                <Grid celled centered>
                    <Grid.Column width={2} className='left_bar_wrapper'>
                        <Container >
                            <h1>Left</h1>
                        </Container>
                    </Grid.Column>

                    <Grid.Column width={13} textAlign='center'>
                        <h1>Country </h1>
                        <Grid celled textAlign='center' >
                            <GridRow columns={2}>
                                <Grid.Column width={6} className='wraper_2capita_limg'>
                                    <Container className='wraper_capita_limg'>
                                        <img className='capital_img' src="https://smapse.ru/storage/2018/12/34133860-1854685924582132-4255627268174381056-n.jpg" alt="Capital" />
                                    </Container>
                                </Grid.Column>
                                <Grid.Column width={8} >
                                    <h4>Столица</h4>
                                    <Container >
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ipsam facilis harum! Quia eaque corrupti, eligendi atque perspiciatis architecto beatae quam officia perferendis modi, corporis eos voluptate qui nihil molestias.</p>
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
                            <GridColumn id='video' width={7}>VIDEO</GridColumn>
                            <GridColumn id='map' width={7}>MAP</GridColumn>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
};

export default CountryPage;
