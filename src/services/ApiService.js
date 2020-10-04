import axios from "axios";

export default class ApiService {


  static endpoint =
    `https://ojnf8gtuh8.execute-api.us-east-2.amazonaws.com/dev/api/v1/`;
  static get(type) {

    return axios.get(`${ApiService.endpoint}${type}`);
  }
  static getById(id, type) {
    return axios.get(`${ApiService.endpoint}${type}/${id}`);
  }

  static create(post, type) {
    return axios.post(`${ApiService.endpoint}${type}`, post, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  static update(id, post, type) {
    return axios.put(`${ApiService.endpoint}/${id}`, post, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  static delete(id, type) {
    return axios.delete(`${ApiService.endpoint}/${id}`);
  }
}
