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

const switchImages = (str:string) => {
  switch(str){
    case "image1":
      return image1
    case "image2":
      return image2
    case "image3":
      return image3
    case "image4":
      return image4
    case "image5":
      return image5
    case "image6":
      return image6
    case "image7":
      return image7
    case "image8":
      return image8
    case "image9":
      return image9
    case "image10":
      return image10
    case "image11":
      return image11
    case "image12":
      return image12
    case "image13":
      return image13
  }
}


const Scoring = () => (




  <Item.Group>

{data.map(game => {
    return( 
    <Item>
      <Item.Image size='tiny' src={switchImages(game.Image)} circular />
      <Item.Content verticalAlign='middle'>
        <Item.Header>{game.Scorer}             
        </Item.Header>   
        <GoalVideo goalvid={game.GoalVid}/>         
        <Item.Meta>{game.Assists}</Item.Meta>
      </Item.Content>
    </Item>
    )})}
  </Item.Group>
)

export default Scoring