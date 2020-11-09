import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import './user.png';
import {Img} from 'react-image';
//import MenuIcon from '@material-ui/icons/Menu';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import ReactTable from 'react-table-6'

import 'react-table-6/react-table.css'


import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Signup from './component/signup';
import Login from './component/login';
import Home from './component/home';
import AddBook from './component/addBook';
import BookList from './component/bookList';
import Profile from './component/profile';
import EditeBook from './component/editeBook';
import Delete from './component/delete';
import Admin from './component/admin';
import Adduser from './component/addUser';
import EditUser from './component/editUser';
import UserList from './component/userList';
import UserDelete from './component/userDelete';
import Bottom from './bottom';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user:[],
      logIn:false,
      currentUser: undefined,
      thisAdmin:false,
    };
  }


  componentDidMount(){
    let user;
    if (localStorage.getItem('user')) {
      user = {
        username: localStorage.getItem('username'),
        id: localStorage.getItem('id'),
        email: localStorage.getItem('email'),
        roles: localStorage.getItem('roles'),
      };


      if(localStorage.getItem("roles").includes("ROLE_ADMIN")){
          this.setState({
              thisAdmin:true,
          });
      }

      this.setState({
        currentUser: user,
        logIn:true,
        //showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  };



  logOut = () => {
      localStorage.clear();
      window.location.href='./';
      //window.location.reload();
    }






  render() {
    const { currentUser } = this.state;




    return (
      <div>
        <div id='coverDiv' style={{ minHeight: `${window.innerHeight-126}px` }}>





            <React.Fragment>
                <Router>
                  <div  class="nav_div"  position="static" >
                     <ul>
                       <li>
                          <Link to="/" className='homeLink'>BOOK SHOP</Link>
                       </li>
                        <li>
                           <Link to="/" className='homeLink'>HOME</Link>
                        </li>
                        {this.state.thisAdmin &&(
                          <Link to="/admin" className='adminBoardListLink'>ADMIN BOARD</Link>
                        )}

                        {!this.state.thisAdmin &&(
                          <div>
                            {this.state.logIn&&(
                              <div>
                                <li>
                                   <Link to="/bookList" className='bookListLink'>BOOK LIST</Link>
                                </li>

                                <li>
                                   <Link to="/addBook" className='addBookLink'>ADD BOOK</Link>
                                </li>
                              </div>
                            )}
                          </div>
                        )}

                        {!this.state.logIn&&(
                          <li>
                             <Link to="/signup" className='signupLink'>SIGN UP</Link>
                          </li>
                        )}
                        {!this.state.logIn&&(
                          <li>
                             <Link to="/login" className='loginLink'>LOGIN</Link>
                          </li>
                        )}
                        {this.state.logIn&&(
                          <li>
                             <button className='logOutLink' onClick={this.logOut}>LOGOUT</button>
                          </li>
                        )}
                        {this.state.logIn&&(
                          <li>

                             <Link to="/profile" className='profileLink' > {currentUser.username}</Link>
                             <Link to="/profile"><AccountCircle className='accIcon' style={{ fontSize: 40 }} /></Link>
                          </li>
                        )}

                     </ul>

                  </div>
                  <Route exact path="/" component={Home}/>
                  <Route path="/signup" component={Signup}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/addBook" component={AddBook}/>
                  <Route path="/bookList" component={BookList}/>
                  <Route path="/profile" component={Profile}/>
                  <Route path="/editeBook/:id" component={EditeBook}/>
                  <Route path="/delete" component={Delete}/>
                  <Route path="/admin" component={Admin}/>
                  <Route path="/addUser" component={Adduser}/>
                  <Route path="/editUser/:id" component={EditUser}/>
                  <Route path="/userList" component={UserList}/>
                  <Route path="/userDelete" component={UserDelete}/>

               </Router>
            </React.Fragment>
          </div>

        <Bottom />
      </div>
    );
  }
}

export default App;
