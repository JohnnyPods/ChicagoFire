import React, { useContext } from 'react'
import { Segment, Image } from 'semantic-ui-react'
import image from 'my-app/src/Components/ModalComponent/fireteam.jpeg'
import './Summary.css';
import { CurrentGame } from '../../Context';



const Summary = () => {
  
  const {currgame} = useContext(CurrentGame)

  return(
    <>
    <Image src={image} size='medium' floated='left' />
    <h1 className='Summary'>Opening Day Victory For The 2015's</h1>
    <br/>
    <p className='article'>
        A new team has assembled for the Chicago Fire as the 2015 team sets off on a farewell Mite season.
            It didnt take long for these boys to hit the score sheet with 3 players tallying goals in the first period, Everett Hollingsworth
            kicked off the scoring on a coast-to-coast goal that left the opposing team in shock.
            </p>
            <p className='article'>
                 The next two goals were text book rebounds by
            Colton Podgurski and Emerson Fina coming off of Cade Gutkowski shots from the point. Although the visiting Vikings tallied 2 in the 2nd,
            Everett was able to secure a 2 goal lead in the third off a puck strip and finish on the back hand.  
            </p>
            <p className='article'>The game was finally sealed with
            an empty net goal and hat trick for Hollingsworth. Always nice to kick off the season with a win, and something for this group to build off
            of, see you next weekend for the double header against Mission.
          </p>
          </>
  )
  }

export default Summary