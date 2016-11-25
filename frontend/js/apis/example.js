import request from 'superagent'

export function exampleApi() {
  return request.get('http://example.com/api')
    .then((res) => res.body)
}
