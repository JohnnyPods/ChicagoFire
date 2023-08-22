import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Data from "./GameStars.json"
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
import fire from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/fire.jpeg'



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

const GameStars = () => (
 
 <div style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'40px', overflow:'hidden', padding:'10px'}}>

<Card.Group>

  {Data.map(game => {
    return(  
<Card>
<Image src={switchImages(game.Image)}/>
<Card.Content textAlign='center'>
  <Card.Header >{game.Player}</Card.Header>
  <Card.Description>
    {game.Stat}
  </Card.Description>
</Card.Content>
</Card>
)})}
</Card.Group>
</div>
)

export default GameStars