import React, { useContext, MouseEvent } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import Recap from '../RecapComponent/Recap';
import { CurrentGame } from '../../Context';



function StatModal({gameID}: {gameID:string}){
  const [open, setOpen] = React.useState(false)
  const {currgame, setCurrGame} = useContext(CurrentGame)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size={'large'}
      trigger={
      <Button 
      compact 
      onClick= {() => setCurrGame(gameID)} 
      color='red' 
      inverted>
        
        <Icon 
        fitted
        name='newspaper' 
        size='large' 
        color='red'/>
        </Button>}>
        
      <Modal.Content>
        <><Recap/></>
      </Modal.Content>
    </Modal>
  )
}

export default StatModal