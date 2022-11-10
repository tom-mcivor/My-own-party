import React, { useState, useEffect } from 'react'
import { getExcuses } from '../apiClient'

function Excuses() {
  const [excusesData, setExcusesData] = useState([])
  const [error, setError] = useState(false)
  const [selected, setSelected] = useState({ excuseId: '', excuse: '' })

  function fetchExcuses(excuseSelected) {
    getExcuses(excuseSelected)
      .then((excuses) => {
        // console.log(excuses)
        setExcusesData(excuses)
      })
      .catch((err) => {
        console.error(err.message)
        setError('Something went wrong!')
      })
  }
  useEffect(() => {
    fetchExcuses()
  }, [])

  if (error) {
    return <div>Oh no! No fetchies for you!</div>
  }

  function handleChange(event, id) {
    setSelected({
      excuseId: id,
      excuse: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetchExcuses(selected)
  }

  return (
    //radio button with three excuses option
    <>
      <form onSubmit={handleSubmit}>
        {excusesData.map((excuse, i) => {
          return (
            <label className="radioButton" key={i}>
              <input
                type="radio"
                value={excuse.excuse}
                checked={selected.excuseId === excuse.id}
                onChange={(e) => handleChange(e, excuse.id)}
              />
              {excuse.excuse}
            </label>
          )
        })}
        <button>Submit your Excuse</button>
      </form>
    </>
  )
}
export default Excuses
