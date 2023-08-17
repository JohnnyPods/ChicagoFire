import React from 'react'
import { Button, Icon, Item } from 'semantic-ui-react'
import './Scoring.css'

import image1 from '/my-app/src/Components/Images/Cade.jpeg'
import image2 from '/my-app/src/Components/Images/Colton.jpeg'
import image3 from '/my-app/src/Components/Images/Emerson.jpeg'
import image4 from '/my-app/src/Components/Images/Everett.jpeg'
import image5 from '/my-app/src/Components/Images/Grayson.jpeg'
import image6 from '/my-app/src/Components/Images/Gunnar.jpeg'
import image7 from '/my-app/src/Components/Images/Jack.jpeg'
import image8 from '/my-app/src/Components/Images/Julian.jpeg'
import image9 from '/my-app/src/Components/Images/Mason.jpeg'
import image10 from '/my-app/src/Components/Images/Owen.jpeg'
import image11 from '/my-app/src/Components/Images/Steven.jpeg'
import image12 from '/my-app/src/Components/Images/Waylon.jpeg'
import image13 from '/my-app/src/Components/Images/Easton.jpeg'
import GoalVideo from '../GoalVideoComponent/GoalVideo'


const Scoring = () => (
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src={image4} circular />
      <Item.Content verticalAlign='middle'>
        <Item.Header>Everett Hollingsworth (1)             
        </Item.Header>   
        <GoalVideo/>         
        <Item.Meta>Assists: Colton Podgurski (1), Cade Gustkowski (1)</Item.Meta>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='tiny' src={image2} circular />
      <Item.Content verticalAlign='middle'>
        <Item.Header>Colton Podgurski (1)             
        </Item.Header>
        <GoalVideo/>   
        <Item.Meta>Assists: Cade Gustkowski (2)</Item.Meta>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='tiny' src={image4} circular />
      <Item.Content verticalAlign='middle'>
        <Item.Header>Everett Hollingsworth (2)             
        </Item.Header>
        <GoalVideo/>   
        <Item.Meta>Assists: Colton Podgurski (1), Cade Gustkowski (1)</Item.Meta>      
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='tiny' src={image4} circular />
      <Item.Content verticalAlign='middle'>
        <Item.Header>Everett Hollingsworth (3)              
        </Item.Header>
        <GoalVideo/>   
        <Item.Meta>Assists: Colton Podgurski (1), Cade Gustkowski (1)</Item.Meta>       
      </Item.Content>
    </Item>
  </Item.Group>
)

export default Scoring