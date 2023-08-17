import React from 'react'
import './PlayerModal.css'
import { Button, Header, Image, Modal, Icon, Grid, Item, Segment, Label, List, Divider } from 'semantic-ui-react'
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
import stock from '/my-app/src/Components/Images/test.jpeg'
import fire from '/my-app/src/Components/TopLeftLogoComponent/fire.jpeg'

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


function PlayerModal({playername, number, birthyear, player, team, food, shoot, position, image}: 
  {playername:string, number:string, birthyear:string, image:string, player:string, team:string, food:string, shoot:string, position:string}){
  const [open, setOpen] = React.useState(false)
 
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size={'fullscreen'}
      
      trigger={
      <Button 
      size='large'
      compact 
      color='black'>
        {playername}
        </Button>}>
       
        <Modal.Header className='name'>
        <Segment color='red' inverted size='huge' massive>{playername}
        <Label attached='top right' color='red' size='massive'>
        {number}
        </Label>
        </Segment>
        </Modal.Header>
      <Modal.Content image>
        <Image size='large' src={switchImages(image)} wrapped />
        <Modal.Description>
        <Grid columns='equal' inverted padded className='player' style={{ }}>
        <Grid.Row color='black' textAlign='center'>
        <Grid.Column>
        <Segment color='black' inverted>
        Shoots: {shoot}
        </Segment>
        </Grid.Column>
        <Grid.Column>
        <Segment color='black' inverted>
        {birthyear}
        </Segment>
        </Grid.Column>
        <Grid.Column>
        <Segment color='black' inverted>
        {position}
        </Segment>
        </Grid.Column>
        </Grid.Row>
        <Divider inverted section/>
        <Grid.Row color='black' textAlign='center'>
        <Grid.Column>
        <Segment color='black' inverted>
        Favorite Hockey Player
        </Segment>
        </Grid.Column>
        <Grid.Column>
        <Segment color='black' inverted>
        Favorite Hockey Team
        </Segment>
        </Grid.Column>
        <Grid.Column>
        <Segment color='black' inverted>
        Favorite Food
        </Segment>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row color='black' textAlign='center'>
        <Grid.Column>
        <Segment color='black' inverted>
        {player}
        </Segment>
        </Grid.Column>
        <Grid.Column>
        <Segment color='black' inverted>
        {team}
        </Segment>
        </Grid.Column>
        <Grid.Column>
        <Segment color='black' inverted>
        {food}
        </Segment>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        </Modal.Description>
      </Modal.Content>

    
    </Modal>
    
  )
      }

export default PlayerModal