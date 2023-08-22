import React, { useContext } from 'react'
import { Segment, Image } from 'semantic-ui-react'
import image from '/Users/johnpod/FireSite/ChicagoFire/src/Components/ModalComponent/fireteam.jpeg'
import image2 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Game1.png'
import image3 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Game1Timeout.jpg'
import image4 from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/Game1Win.jpg'
import './Summary.css';
import { CurrentGame } from '../../Context';
import data from './Summary.json'




const Summary = () => {
  
  const {currgame} = useContext(CurrentGame)
  var x = parseInt(currgame)-1



  return(
    <Segment>
    <Image src={image2} size='big' floated='left' />

    <h1 className='Summary'>{data[x].Title}</h1>
    <br></br>
      <p className='article'>{data[x].P1}</p>
      <p className='article'>{data[x].P2}</p>
      <Image src={image3} size='medium' floated='left'/>
      <p className='article'>{data[x].P3}</p>
      <Image src={image4} size='large' floated='right' />
      <br></br>
      <p className='article'>{data[x].P4}</p>
    </Segment>
       
  )
  }

export default Summary