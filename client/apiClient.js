import request from 'superagent'

export function getGreeting() {
  return request.get('/greeting').then((res) => res.body.greeting)
}

export function getActivities() {
  return request
    .get('https://www.boredapi.com/api/activity/')
    .then((res) => res.body.activity)
}
export function getExcuses() {
  return request
    .get(`https://excuser.herokuapp.com/v1/excuse/3`)
    .then((res) => res.body)
}

//get images api?
export function getImages() {
  return request
  .get('http:localhost:3000/api/v1/images')
  .then((res) => res.body)
  // return request.get('').then((res) => res)
}
