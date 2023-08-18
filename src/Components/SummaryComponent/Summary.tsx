import React, { useContext } from 'react'
import { Segment, Image } from 'semantic-ui-react'
import image from '/Users/johnpod/FireSite/ChicagoFire/src/Components/ModalComponent/fireteam.jpeg'
import './Summary.css';
import { CurrentGame } from '../../Context';
import data from './Summary.json'



const Summary = () => {
  
  const {currgame} = useContext(CurrentGame)
  var x = parseInt(currgame)



  return(
    <>
    <Image src={image} size='medium' floated='left' />

    <h1 className='Summary'>{data[x].Title}</h1>
    <br></br>
      <p className='article'>{data[x].P1}</p>
      <p className='article'>{data[x].P2}</p>
      <p className='article'>{data[x].P3}</p>
    </>
       
  )
  }

export default Summary