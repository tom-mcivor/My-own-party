import React from 'react'
import '@testing-library/jest-dom'

import { screen, render } from '@testing-library/react'

import Activities from './Activities.jsx'

describe('Activities component tests:', () => {
  it('displays the text', () => {
    const props = {
      history: [{ activity: 'Playball', excuse: 'No Ball' }],
    }

    render(<Activities {...props}></Activities>)

    const activityHeading = screen.getByRole('heading')
    console.log(activityHeading)
    expect(activityHeading).toBeInTheDocument()

    expect(activityHeading).toHaveTextContent(
      'Your Activity an Excuse combo for next time 😉'
    )
  })
  it('displays the history prop as text', () => {
    const props = {
      history: [{ activity: 'Playball', excuse: 'No Ball' }],
    }

    render(<Activities {...props}></Activities>)

    const listItem = screen.getByRole('listitem')
    expect(listItem).toBeInTheDocument()
    expect(listItem).toHaveTextContent('Playball: No Ball')
  })
})
