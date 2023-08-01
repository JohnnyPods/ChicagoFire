import React from 'react'
import { Image } from 'semantic-ui-react'
import image from "/Users/johnpod/ReactProject/my-app/src/Components/TopLeftLogoComponent/fire.jpeg"
import './TopLeftLogo.css';
import { Link, Route, Routes } from "react-router-dom"



const TopLeftLogo = () => (
<div className="logo" >
  <Image src={image} size='small' centered as={Link} to="/"/>
</div>
)

export default TopLeftLogo