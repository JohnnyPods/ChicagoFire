import React from 'react'
import { Button, Icon, Item } from 'semantic-ui-react'
import './Scoring.css'
import data from './Scoring.json'

import image1 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Cade.jpeg'
import image2 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Colton.jpeg'
import image3 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Emerson.jpeg'
import image4 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Everett.jpeg'
import image5 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Grayson.jpeg'
import image6 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Gunnar.jpeg'
import image7 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Jack.jpeg'
import image8 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Julian.jpeg'
import image9 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Mason.jpeg'
import image10 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Owen.jpeg'
import image11 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Steven.jpeg'
import image12 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Waylon.jpeg'
import image13 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Easton.jpeg'
import GoalVideo from '../GoalVideoComponent/GoalVideo'


const Scoring = () => (




  <Item.Group>
    <Item>
      <Item.Image size='tiny' src={image6} circular />
      <Item.Content verticalAlign='middle'>
        <Item.Header>Weissenhofer (1)             
        </Item.Header>   
        <GoalVideo goalvid={"yqjddhedXcE"}/>         
        <Item.Meta>Assists: LaFrance (1)</Item.Meta>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='tiny' src={image11} circular />
      <Item.Content verticalAlign='middle'>
        <Item.Header>Trafficanta (1)             
        </Item.Header>
        <GoalVideo goalvid={"PtTH7tGUroo"}/>   
        <Item.Meta>Assists: Hollinsgworth (1), Perry (1)</Item.Meta>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='tiny' src={image1} circular />
      <Item.Content verticalAlign='middle'>
        <Item.Header>Gustkowski (1)              
        </Item.Header>
        <GoalVideo goalvid={"OxwS3ilQYeU"}/>   
        <Item.Meta>Assists: Perry (2)</Item.Meta>       
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='tiny' src={image11} circular />
      <Item.Content verticalAlign='middle'>
        <Item.Header>Trafficanta (2)             
        </Item.Header>
        <GoalVideo goalvid={"JZWZqo5kvek"}/>   
        <Item.Meta>Assists: Perna (1), LaFrance (2)</Item.Meta>       
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='tiny' src={image8} circular />
      <Item.Content verticalAlign='middle'>
        <Item.Header>Scanlon (1)              
        </Item.Header>
        <GoalVideo goalvid={"idafjY3HKUM"}/>   
        <Item.Meta>Assists: Trafficanta (1), Perry (3)</Item.Meta>       
      </Item.Content>
    </Item>
  </Item.Group>
)

export default Scoring