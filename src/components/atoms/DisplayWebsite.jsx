import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe'

function DisplayWebsite (props) {
  const {website} = props
  return (
    <div className='social-icons'>
      <a href={website} target='_blank'><FontAwesomeIcon icon={faGlobe} size='1x' color='#353535' /></a>
    </div>
  )
}

export default DisplayWebsite
