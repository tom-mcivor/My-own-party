import nock from 'nock'


import { getActivities } from '../apiClient'


// describe('geActivity', () => {
it('gets a random activity from the api', () => {
  const scope = nock('https://www.boredapi.com/api/activity')
    .get('/')
    .reply(200, {
      activity: 'Look at your finances and find one way to save money',
    })

  return getActivities().then((boredActivity) => {
    expect(boredActivity).toContain(
      'Look at your finances and find one way to save money'
    )
    expect(scope.isDone()).toBe(true)
  })
})
// })

