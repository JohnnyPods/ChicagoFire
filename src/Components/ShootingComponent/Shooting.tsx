import React from 'react'
import { Button, Header, Image, Modal, Icon, Placeholder } from 'semantic-ui-react'
import image from '/Users/johnpod/ReactProject/my-app/src/Components/ModalComponent/fireteam.jpeg'
import Recap from '../RecapComponent/Recap';

function Shooting() {
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
        <h1>Shooting % Stats</h1>
        </Button>}
    >
      <Modal.Content>
      <Placeholder>
    <Placeholder.Line />
    <Placeholder.Line />
    <Placeholder.Line />
    <Placeholder.Line />
    <Placeholder.Line />
  </Placeholder>
      </Modal.Content>
    </Modal>
  )
}

export default Shooting