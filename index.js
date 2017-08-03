'use strict'

function isObject (val) {
  return Object.prototype.toString.apply(val).slice(8, -1) === 'Object'
}
function objToRoutes (obj, opts = {}) {
  const { delimiter = '/' } = opts
  let routes = []

  function getRoutes (path, obj) {
    routes.push({ path: path.length ? path : delimiter, value: obj })
    Object.keys(obj).forEach(key => {
      if (isObject(obj[key])) {
        getRoutes(`${path}${delimiter}${key}`, obj[key])
      } else {
        routes.push({ path: `${path}${delimiter}${key}`, value: obj[key] })
      }
    })
  }

  getRoutes('', obj)

  return routes
}

module.exports = objToRoutes
