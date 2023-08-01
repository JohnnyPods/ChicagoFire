import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import image from '/Users/johnpod/ReactProject/my-app/src/Components/ModalComponent/fireteam.jpeg'
import Recap from '../RecapComponent/Recap';

function StatModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size={'large'}
      trigger={<Button compact color='red' inverted>
        <Icon 
        fitted
        name='newspaper' 
        size='large' 
        color='red'/>
        </Button>}
    >
      <Modal.Content>
        <><Recap/></>
      </Modal.Content>
    </Modal>
  )
}

export default StatModal