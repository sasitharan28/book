import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios.post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.basicToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    axios.post(API_URL + "logout", {});
  }

  register(username, email, password,role) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      role
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getAllUser() {
    return axios.get('http://localhost:8080/api/user',
    {
      headers: {
        'Authorization': 'Basic ' + localStorage.getItem('basicToken')
      }
    })
  }

  deleteUserById(id) {
    return axios.delete('http://localhost:8080/api/user/'+id,
    {
      headers: {
        'Authorization': 'Basic ' + localStorage.getItem('basicToken')
      }
    })
  }

  getUserById(id){
    return axios.get('http://localhost:8080/api/user/'+id,
    {
      headers: {
        'Authorization': 'Basic ' + localStorage.getItem('basicToken')
      }
    })
  }

  updateUserById(user){
    return axios.put('http://localhost:8080/api/user/' + user.id, user,
    {
      headers: {
        'Authorization': 'Basic ' + localStorage.getItem('basicToken')
      }
    })
  }

  getAllBooks(){
    return axios.get('http://localhost:8080/api/books',
    {
      headers: {
        'Authorization': 'Basic ' + localStorage.getItem('basicToken')
      }
    })
  }


  addBook(books){
    return axios.post('http://localhost:8080/api/books',books,
    {
      headers: {
        'Authorization': 'Basic ' + localStorage.getItem('basicToken')
      }
    })
  }

  bookLanguage(){
    return axios.get('http://localhost:8080/api/books/languages',
    {
      headers: {
        'Authorization': 'Basic ' + localStorage.getItem('basicToken')
      }
    })
  }

  bookGenres(){
    return axios.get('http://localhost:8080/api/books/genres',
    {
      headers: {
        'Authorization': 'Basic ' + localStorage.getItem('basicToken')
      }
    })
  }

  getBookById(id){
    return axios.get('http://localhost:8080/api/books/'+id,
    {
      headers: {
        'Authorization': 'Basic ' + localStorage.getItem('basicToken')
      }
    })
  }



  updateBook(book){
    return axios.put('http://localhost:8080/api/books/' + book.id, book,
    {
      headers: {
        'Authorization': 'Basic ' + localStorage.getItem('basicToken')
      }
    })
  }

  deleteBookById(id){
    return axios.delete('http://localhost:8080/api/books/'+id,
    {
      headers: {
        'Authorization': 'Basic ' + localStorage.getItem('basicToken')
      }
    })
  }


}

export default new AuthService();
