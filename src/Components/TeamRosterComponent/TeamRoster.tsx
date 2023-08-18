import React from 'react'
import { Card, Icon, Image, Placeholder, Grid, Item, List, Label } from 'semantic-ui-react'
import Roster from "./TeamRoster.json";
import { Link, Route, Routes } from "react-router-dom"
import './TeamRoster.css';
import image1 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/blackCade.jpeg'
import image2 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/squareColton.png'
import image3 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/blackEmerson.jpeg'
import image4 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/blackEverett.jpeg'
import image5 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/blackGrayson.jpeg'
import image6 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/blackGunnar.jpeg'
import image7 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/blackJack.jpeg'
import image8 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/blackJulian.jpeg'
import image9 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/blackMason.jpeg'
import image10 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/blackOwen.jpeg'
import image11 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/blackSteven.jpeg'
import image12 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/blackWaylon.jpeg'
import image13 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/blackEaston.jpeg'
import stock from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/test.jpeg'
import fire from '/Users/johnpod/FireSite/ChicagoFire/src/Components/TopLeftLogoComponent/fire.jpeg'
import PlayerModal
 from '../PlayerModalComponent/PlayerModal';
import TeamInfo from '../TeamInfoComponent/TeamInfo';



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
    case "fire":
      return fire
  }
}


const TeamRoster = () => (

  <div className='roster'>
    <TeamInfo/>

    <Card.Group itemsPerRow={3}>
      
  {Roster.Player.map(info =>{
  
    return(
     
  <Card color='black'>
  
    <Image 
    src={switchImages(info.image)}
    wrapped ui={false}
    />
    
  
      <Label attached='top left' color='red' size='big'>
        {info.number}
      </Label>
    
    <Card.Content>
    <PlayerModal 
    playername={info.name} 
    number={info.number} 
    birthyear={info.birthyear}
    player={info.favoriteplayer}
    team={info.favoriteteam}
    food={info.favoritefood}  
    shoot={info.handed}
    position={info.position}
    image={info.image}
    />
    </Card.Content>
  </Card>

    )})}
    
  </Card.Group>
 </div>
)

export default TeamRoster