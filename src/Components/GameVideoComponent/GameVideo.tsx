import React from 'react'
import { Button, Image, Modal, Icon, Embed } from 'semantic-ui-react'

function GameVideo() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button compact color='red' inverted>
        <Icon 
        className='video'
        fitted 
        name='video camera' 
        size='large'
        color='red'/>
        </Button>}
    >
      <Embed
        autoplay={true}
        hd={true}
        id='v5e1FRqjdss'
        placeholder='/images/image-16by9.png'
        source='youtube'
  />
    </Modal>
  )
}

export default GameVideo