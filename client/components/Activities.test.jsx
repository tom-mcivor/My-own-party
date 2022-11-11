
import React from "react"


import { screen, render } from "@testing-library/react"


import Activities from './Activities.jsx'

describe('Color component tests:', () => {
  it('displays the color prop as text', () => {
    const props = {
      color: 'purple'
    }

    render(<Activities {...props}></Activities>)

    const colorHeading = screen.getByRole('heading')
    expect(colorHeading).toBeInTheDocument()
    
  expect(colorHeading).toHaveTextContent(props.color)
  })
  it('displays the color prop as text2', () => {
    const props = {
      color: 'red'
    }

    render(<Activities {...props}></Activities>)

    const colorHeading = screen.getByRole('heading')
    expect(colorHeading).toBeInTheDocument()
    expect(colorHeading).toHaveTextContent(props.Activities)
  })
})
