import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import { getExcuses, getActivities } from '../apiClient'

jest.mock('../apiClient')
import Excuses from './Excuses'

describe('<Excuses />', () => {
  it('loads excuses from the api on load', async () => {
    getExcuses.mockReturnValue(
      Promise.resolve([
        { id: 1, excuse: 'I dropped my phone in the toilet' },
        { id: 2, excuse: 'my dog ate my homework' },
      ])
    )
    getActivities.mockReturnValue(Promise.resolve('testing tests'))
    render(<Excuses />)
    return waitFor(() => getExcuses.mock.calls.length > 0)
      .then(() => {
        let excuse = screen.getByText('my dog ate my homework')
        expect(excuse).not.toBeNull()

        return waitFor(() => getActivities.mock.calls.length > 0)
      })
      .then(() => {
        let activity = screen.getByText(/testing tests/i)
        expect(activity).not.toBeNull()
      })
  })
})
