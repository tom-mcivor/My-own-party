import React, { useState, useEffect } from 'react'

import { getActivities } from '../apiClient'


function Activities(props) {

  return (

    <ul>

    {props.history.map((item,index)=>{
      return(
        <li key={index}>Let's {item.activity}: {item.excuse}</li>
      )
    })

    }

    </ul>

  )

}

export default Activities