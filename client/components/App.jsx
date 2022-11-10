import React, { useState } from 'react'
import Activities from './Activities'
import Excuses from './Excuses'
import Header from './Header'
import Footer from './Footer'
import Image from './Image'

const App = () => {
  const [history, setHistory] = useState([])
  return (
    <>
      <Header />
      <Image />
      <Excuses setHistory={setHistory} history={history} />
      <Activities history={history} />
      <Footer />
    </>
  )
}

export default App

//History
// Activity: Excuse
// Activity: Excuse
// Activity: Excuse
