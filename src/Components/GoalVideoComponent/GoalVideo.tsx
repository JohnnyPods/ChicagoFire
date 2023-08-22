import React from 'react'
import { Button, Modal, Icon, Embed } from 'semantic-ui-react'
import image from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/fire.jpeg'
import './GoalVideo.css'

function GoalVideo({goalvid}: {goalvid:string}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={ <Button basic circular color='red' size='tiny' compact>
      <Icon 
      className='test'
      name='video' 
      size='large'/>
      </Button>}
    >
      <Embed
        autoplay={true}
        hd={true}
        id={goalvid}
        placeholder={image}
        source='youtube'
  />
    </Modal>
  )
}

export default GoalVideo