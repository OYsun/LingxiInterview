
const LocalEvent = function (item) {
  this.get = function () {
    return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : ''
  }
  this.set = function (obj) {
    window.localStorage.setItem(item, JSON.stringify(obj))
  }
  this.clear = function () {
    window.localStorage.removeItem(item)
  }
}
export const local = new LocalEvent('lx_concat')
