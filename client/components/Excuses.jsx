import React, { useState, useEffect } from 'react'
import { getExcuses, getActivities } from '../apiClient'

function Excuses(props) {
  const [excusesData, setExcusesData] = useState([])
  const [error, setError] = useState(false)
  const [selected, setSelected] = useState({ excuseId: '', excuse: '' })
  const [activities, setActivities] = useState(null)

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

  function fetchActivities() {
    getActivities()
      .then((res) => {
        setActivities(res)

        console.log(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  useEffect(() => {
    fetchActivities()
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
    props.setHistory([...props.history, { ...selected, activity: activities }])
    setSelected({ excuseId: '', excuse: '' })
    fetchActivities()
    fetchExcuses()
  }

  return (
    //radio button with three excuses option
    <>
      <h2>Hey hey! How about we ...</h2>
      <h2>{activities}?</h2>
      <h3>Hmmmmm actually </h3>
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
