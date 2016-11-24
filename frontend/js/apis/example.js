import request from 'superagent'

export function exampleApi() {
  request.get('https://example.com')
    .end((res) => res.body)
}
