import React, { useState, useEffect } from 'react'
import { getActivities, getExcuses } from '../apiClient'

import Activities from './Activities'
import Excuses from './Excuses'
import Header from './Header'
import Footer from './Footer'
import Image from './Image'


const App = () => {
  return (
    <>
    <Header />
      <Image/>
      <Activities />
      <Excuses />
    <Footer/>  
    </>
  )
}

export default App
