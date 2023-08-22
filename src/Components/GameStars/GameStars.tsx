import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
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

const GameStars = () => (
 
 <div style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'40px', overflow:'hidden', padding:'10px'}}>
<Card.Group>
<Card>
<Image src={image8}/>
<Card.Content textAlign='center'>
  <Card.Header >Julian Scanlon</Card.Header>
  <Card.Description>
    GWG
  </Card.Description>
</Card.Content>
</Card>

<Card>
<Image src={image13}/>
<Card.Content textAlign='center'>
  <Card.Header >Easton Goodfellow</Card.Header>
  <Card.Description>
    19-23 Saves  .826 SV% 
  </Card.Description>
</Card.Content>
</Card>

<Card>
<Image src={image9}/>
<Card.Content textAlign='center'>
  <Card.Header>Mason Perry</Card.Header>
  <Card.Description>
    3 Assists
  </Card.Description>
</Card.Content>
</Card>
</Card.Group>
</div>
)

export default GameStars