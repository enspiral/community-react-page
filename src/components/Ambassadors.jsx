import React from 'react';
import { map } from 'lodash'

import ListOfAmbassadors from './atoms/ListOfAmbassadors'

function Ambassadors(props) {
  const { ambassadors } = props
  return (
    <div className='ambassadors'>
      {map(ambassadors, (ambassador, key) => {
        return <ListOfAmbassadors key={key} ambassador={ambassador} />
      })}
    </div>
  )
}

export default Ambassadors;

// To Do: 
// Write a function to check the status of the person. ? (isAmbassador = true) display gravatar : hide