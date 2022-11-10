import React, { useState, useEffect } from 'react'
import { getActivities, getExcuses } from '../apiClient'

import Activities from './Activities'
import Excuses from './Excuses'

const App = () => {
  return (
    <>
      <Activities />
      <Excuses />
    </>
  )
}

export default App
