import React from 'react'
import { Image, Grid, Icon } from 'semantic-ui-react'
import './Footer.css'
import fire from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/fire.jpeg'




const Footer = () => (
    <Grid inverted>
    <Grid.Column width={3} verticalAlign='middle'>
      <Image  src={fire} size='small' data-testid="pic-1"/>
    </Grid.Column>
    <Grid.Column width={10} verticalAlign='middle'>
     <span className='motto' data-testid="text-1">A HOLISTIC APPROACH TO DEVELOPING PLAYER PERFORMANCE THROUGH ON/OFF-ICE TRAINING AND MENTORSHIP</span>
    </Grid.Column>
    <Grid.Column width={3} verticalAlign='middle'>
    <a style={{ color: 'black'}}><Icon name='facebook' size='huge' data-testid="icon-1"/></a>
    <a style={{ color: 'black'}}><Icon name='instagram' size='huge' /></a>
    <a style={{ color: 'black'}}><Icon name='twitter' size='huge' /></a> 
    </Grid.Column>
  </Grid>

)

export default Footer