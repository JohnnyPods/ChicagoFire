import React from 'react'
import { Button, Image, Item, Grid, Icon } from 'semantic-ui-react'
import './Footer.css'
import fire from '/Users/johnpod/FireSite/ChicagoFire/src/Components/TopLeftLogoComponent/fire.jpeg'
import { link } from 'fs'



const Footer = () => (
    <Grid inverted>
    <Grid.Column width={3} verticalAlign='middle'>
      <Image  src={fire} size='small' />
    </Grid.Column>
    <Grid.Column width={10} verticalAlign='middle'>
     <span className='motto'>A HOLISTIC APPROACH TO DEVELOPING PLAYER PERFORMANCE THROUGH ON/OFF-ICE TRAINING AND MENTORSHIP</span>
    </Grid.Column>
    <Grid.Column width={3} verticalAlign='middle'>
    <a style={{ color: 'black'}}  href="www.facebook.com/chicagofirehc/"><Icon name='facebook' size='huge' /></a>
    <a style={{ color: 'black'}}><Icon name='instagram' size='huge' /></a>
    <a style={{ color: 'black'}}><Icon name='twitter' size='huge' /></a>
    </Grid.Column>
  </Grid>

)

export default Footer