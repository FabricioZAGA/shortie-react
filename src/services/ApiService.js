import axios from "axios";

export default class ApiService {


  static endpoint =
    `https://ojnf8gtuh8.execute-api.us-east-2.amazonaws.com/dev/api/v1/`;
  //`http://localhost:5000/api/v1/`;

  /**
  * @param  {String} type query type
  * @return {axios}      [description]
  */
  static get(type) {

    return axios.get(`${ApiService.endpoint}${type}`);
  }

  /**
  * @param {Number} id query identity
  * @param {String} type query type
  * @return {axios} response
  */
  static getById(id, type) {
    return axios.get(`${ApiService.endpoint}${type}/${id}`);
  }

  /**
  * @param {Array} post query identity
  * @param {String} type query type
  * @return {axios} response
  */
  static insert(post, type) {
    return axios.post(`${ApiService.endpoint}${type}`, post, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  /**
  * @param {Number} id query identity
  * @param {Array} post query identity
  * @param {String} type query type
  * @return {axios} response
  */
  static update(id, post, type) {
    console.log(type)
    return axios.put(`${ApiService.endpoint}${type}/${id}`, post, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  /**
  * @param {Number} id query identity
  * @param {String} type query type
  * @return {axios} response
  */
  static delete(id, type) {
    return axios.delete(`${ApiService.endpoint}/${id}`);
  }
}
