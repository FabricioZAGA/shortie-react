export default class Cookies {


  static set(name, data) {
    localStorage.setItem(name, JSON.stringify(data))
  }

  static get(name) {
    return JSON.parse(localStorage.getItem(name))
  }

  static remove(name) {
    localStorage.removeItem(name)
  }

}
