import { routes } from './app-routing.module'

describe('App Routing', () => {

  it('Should have as path login', () => {
    expect(routes[0].path).toBe('login');
  })

  it('Should have as path home', () => {
    expect(routes[1].path).toBe('');
  })
})
