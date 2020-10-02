import axios from "axios";

export default class PostsService {
  static endpoint =
    "http://ec2-52-90-188-77.compute-1.amazonaws.com:5000/api/v1/posts";
  static getPosts() {
    return axios.get(PostsService.endpoint);
  }
  static getPostsById(id) {
    return axios.get(`${PostsService.endpoint}/${id}`);
  }

  static createPost(post) {
    return axios.post(PostsService.endpoint, post, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  static updatePost(id, post) {
    return axios.put(`${PostsService.endpoint}/${id}`, post, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  static deletePost(id) {
    return axios.delete(`${PostsService.endpoint}/${id}`);
  }
}
