import React, { useState, useEffect } from 'react'

import { getActivities } from '../apiClient'


function Activities() {


  const [activities, setActivities] = useState(null)

  useEffect(() => {

    getActivities()
      .then((res) => {
        // const { latitude, longitude: long } = res
        // console.log(long, latitude)
        // setFoxImages(res.fox)
        setActivities(res)

        console.log(res)

      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (

    <>
      <h2>{activities}</h2>

    </>

  )

}

export default Activities