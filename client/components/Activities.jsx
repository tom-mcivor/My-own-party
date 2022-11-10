import React from 'react'

function Activities(props) {
  return (
    <div className="container">
      <h3>Your Activity an Excuse combo for next time 😉</h3>
      <ul>
        {props.history.map((item, index) => {
          return (
            <li key={index}>
              Let's {item.activity}: {item.excuse}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Activities
