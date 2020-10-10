export default class Cookies {

  /**
  * @param {String} name cookie name
  * @param {Array} data cookie data
  * @param {String} type query type
  */
  static set(name, data) {
    localStorage.setItem(name, JSON.stringify(data))
  }

  /**
  * @param {String} name cookie name
  * @return {Array}
  */
  static get(name) {
    return JSON.parse(localStorage.getItem(name))
  }

  /**
  * @param {String} name cookie name
  */
  static remove(name) {
    localStorage.removeItem(name)
  }

}
