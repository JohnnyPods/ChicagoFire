import React from 'react'
import { Dropdown } from 'semantic-ui-react'
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

import './PlayerDrop.css';

const friendOptions = [
  {
    key: 'Cade Gutkowski',
    text: 'Cade Gutkowski',
    value: 'Cade Gutkowski',
    image: {src: image1}
  },
  {
    key: 'Colton Podgurski',
    text: 'Colton Podgurski',
    value: 'Colton Podgurski',
    image: {src: image2},
  },
  {
    key: 'Emerson Fina',
    text: 'Emerson Fina',
    value: 'Emerson Fina',
    image: {src: image3}
  },
  {
    key: 'Everett Hollinsworth',
    text: 'Everett Hollinsworth',
    value: 'Everett Hollinsworth',
    image: {src: image4}
  },
  {
    key: 'Grayson Smith',
    text: 'Grayson Smith',
    value: 'Grayson Smith',
    image: {src: image5}
  },
  {
    key: 'Gunnar Weissenhofer',
    text: 'Gunnar Weissenhofer',
    value: 'Gunnar Weissenhofer',
    image: {src: image6}
  },
  {
    key: 'Jack Perna',
    text: 'Jack Perna',
    value: 'Jack Perna',
    image: {src: image7}
  },
  {
    key: 'Julian Scanlon',
    text: 'Julian Scanlon',
    value: 'Julian Scanlon',
    image: {src: image8}
  },
  {
    key: 'Mason Perry',
    text: 'Mason Perry',
    value: 'Mason Perry',
    image: {src: image9}
  },
  {
    key: 'Owen Borner',
    text: 'Owen Borner',
    value: 'Owen Borner',
    image: {src: image10}
  },
  {
    key: 'Steven Trifficanta',
    text: 'Steven Trifficanta',
    value: 'Steven Trifficanta',
    image: {src: image11}
  },
  {
    key: 'Waylon Foyt',
    text: 'Waylon Foyt',
    value: 'Waylon Foyt',
    image: {src: image12}
  },
  {
    key: 'Easton Goodfellow',
    text: 'Easton Goodfellow',
    value: 'Easton Goodfellow',
    image: {src: image13}
  }
]

const PlayerDrop = () => (
  <div className='dropdown'>
  <Dropdown
    placeholder='Select Player'
    fluid
    selection
    options={friendOptions} 
  />
 </div>
)


export default PlayerDrop
