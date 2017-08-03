'use strict'

const objToRoutes = require('./')

const data = {
  posts: {
    foo: {
      message: 'hello'
    }
  },
  other: 'foo',
  baz: [1,2,3],
  food: {
    steal: {
      healthy: true
    }
  }
}

test('should be defined', () => {
  expect(objToRoutes).toBeDefined()
})

test('should create array', () => {
  expect(Array.isArray(objToRoutes(data))).toBe(true)
})

test('should return objects with path and value', () => {
  objToRoutes(data).forEach(({path, value}) => {
    expect(path).toBeDefined()
    expect(value).toBeDefined()
  })
})
