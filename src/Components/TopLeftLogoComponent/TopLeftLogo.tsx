import React from 'react'
import { Image } from 'semantic-ui-react'
import image from "/Users/johnpod/ReactProject/my-app/src/Components/TopLeftLogoComponent/fire.jpeg"
import './TopLeftLogo.css';



const TopLeftLogo = () => (
<div className="logo">
  <Image src={image} size='tiny' centered/>
</div>
)

export default TopLeftLogo