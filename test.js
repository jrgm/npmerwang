const add = require('.')

it('add', () => {
  expect.assertions(1)
  expect(add(1, 2)).toEqual(3)
})
