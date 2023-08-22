import React from 'react'
import { Button, Image, Modal, Icon, Embed } from 'semantic-ui-react'
import fire from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/fire.jpeg'

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
        id='CcHgfQac9ow'
        placeholder={fire}
        source='youtube'
  />
    </Modal>
  )
}

export default GameVideo