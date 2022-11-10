import request from 'superagent'

export function getGreeting() {
  return request.get('/greeting').then((res) => res.body.greeting)
}

export function getactivites() {
  return request.get('https://www.boredapi.com/api/activity/').then((res) => res.body.activity)
}