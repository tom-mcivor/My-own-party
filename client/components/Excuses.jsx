import React, { useState, useEffect } from 'react'
import { getExcuses } from '../apiClient'

function Excuses() {
  const [excusesData, setExcusesData] = useState(null)
  const [error, setError] = useState(false)
  const [input, setInput] = useState('')

  useEffect(() => {
    getExcuses()
      .then((excuses) => {
        setExcusesData(excuses)
      })
      .catch((err) => {
        console.error(err.message)
        setError('Something went wrong!')
      })
  }, [])

  if (error) {
    return <div>Oh no! No fetchies for you!</div>
  }

  return (
    //radio button with three excuses option
    <></>
  )
}
export default Excuses
