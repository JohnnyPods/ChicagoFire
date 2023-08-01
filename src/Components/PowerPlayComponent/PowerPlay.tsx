import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import image from '/Users/johnpod/ReactProject/my-app/src/Components/ModalComponent/fireteam.jpeg'
import Recap from '../RecapComponent/Recap';
import { PPGraph } from '../PPGraphComponent/PPGraph';

function PowerPlay() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size={'large'}
      trigger={
      <Button 
      fluid 
      color='red' 
      size='large' 
      inverted>
        <h1>Power Play Stats</h1>
        </Button>}
    >
      <Modal.Content>
        <PPGraph/>
      </Modal.Content>
    </Modal>
  )
}

export default PowerPlay