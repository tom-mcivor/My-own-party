import React, { useState, useEffect } from 'react'

import { getImages } from '../apiClient'


function Image() {


  // const [image, setImage] = useState(null)

  // useEffect(() => {

  //   getImages()
  //     .then((res) => {
  //       // const { latitude, longitude: long } = res
  //       // console.log(long, latitude)
  //       // setFoxImages(res.fox)
  //       setImage(res)

  //       console.log(res)

  //     })
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // }, [])

  return (

    <>
      <img src='/images/image1.jpg' alt='asd'></img>
    </>

  )

}

export default Image