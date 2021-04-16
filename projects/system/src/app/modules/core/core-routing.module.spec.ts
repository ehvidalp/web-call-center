import { routes } from "./core-routing.module"

describe('core routing', () => {
  it('Should have as path home', () => {
    expect(routes[0].path).toBe('');
  })
})
