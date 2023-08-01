import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import image1 from '/Users/johnpod/ReactProject/my-app/src/Components/Images/Cade.jpeg'
import image2 from '/Users/johnpod/ReactProject/my-app/src/Components/Images/Colton.jpeg'
import image3 from '/Users/johnpod/ReactProject/my-app/src/Components/Images/Emerson.jpeg'
import image4 from '/Users/johnpod/ReactProject/my-app/src/Components/Images/Everett.jpeg'
import image5 from '/Users/johnpod/ReactProject/my-app/src/Components/Images/Grayson.jpeg'
import image6 from '/Users/johnpod/ReactProject/my-app/src/Components/Images/Gunnar.jpeg'
import image7 from '/Users/johnpod/ReactProject/my-app/src/Components/Images/Jack.jpeg'
import image8 from '/Users/johnpod/ReactProject/my-app/src/Components/Images/Julian.jpeg'
import image9 from '/Users/johnpod/ReactProject/my-app/src/Components/Images/Mason.jpeg'
import image10 from '/Users/johnpod/ReactProject/my-app/src/Components/Images/Owen.jpeg'
import image11 from '/Users/johnpod/ReactProject/my-app/src/Components/Images/Steven.jpeg'
import image12 from '/Users/johnpod/ReactProject/my-app/src/Components/Images/Waylon.jpeg'
import image13 from '/Users/johnpod/ReactProject/my-app/src/Components/Images/Easton.jpeg'

const GameStars = () => (
 
 <div style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'40px', overflow:'hidden', padding:'10px'}}>
<div>
<Card>
<Image src={image4}/>
<Card.Content>
  <Card.Header>Everett Hollinsgworth</Card.Header>
  <Card.Description>
    3 Goals, 1 Assist
  </Card.Description>
</Card.Content>
</Card>
</div>
<div>
<Card>
<Image src={image2}/>
<Card.Content>
  <Card.Header>Colton Podgurski</Card.Header>
  <Card.Description>
    1 Goal, 2 Assist, 3 Blocked Shots
  </Card.Description>
</Card.Content>
</Card>
</div>
<div>
<Card>
<Image src={image1}/>
<Card.Content>
  <Card.Header>Cade Gustkowski</Card.Header>
  <Card.Description>
    3 Assists, 2 Blocked Shots, +4
  </Card.Description>
</Card.Content>
</Card>
</div>
</div>
)

export default GameStars