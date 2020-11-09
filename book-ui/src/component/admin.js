import React, { Component } from "react";
import { Typography, Card, CardContent, Paper, Grid } from '@material-ui/core';
import ManageUser from './manageUser.png';
import BooksImg from './books.png';
import './css/admin.css';

class Admin extends Component {
  addUser = () => {
    window.location.href='/addUser';
  }

  viewUser = () => {
    window.location.href='/userList';
  }

  addBook = () => {
    window.location.href='/addBook';
  }

  viewBook = () => {
    window.location.href='/bookList';
  }
  render(){

    return(
      <div className='AdminDiv'>
      <Grid container spacing={1} xs={10} style={{top:'20px',position:'relative', margin:'auto'}}>
          <Grid item xs={12} style={{backgroundColor:'white',margin:'auto'}}>
            <h1 style={{textAlign:'center'}}>Welcome to Admin Panel</h1>
          </Grid>

          <Grid item xs={5} style={{backgroundColor:'white', margin:'auto',marginTop:'20px'}}>

              <img src={ManageUser} alt="Smiley face" style={{width:'320px',}}/>
              <p style={{textAlign:'center', fontSize:'19px',cursor:'default'}}>Manage Users</p>
              <button className='admin_panel_add_user_button' onClick={this.addUser}>ADD USER</button><button className='admin_panel_view_user_button' onClick={this.viewUser}>VIEW USERS</button>
          </Grid>

          <Grid item xs={5} style={{backgroundColor:'white', margin:'auto',marginTop:'20px', height:'430px',}}>
              <img src={BooksImg} alt="Smiley face" style={{width:'320px',marginTop:'60px'}}/>
              <p style={{textAlign:'center', fontSize:'19px',cursor:'default',marginTop:'80px'}}>Manage Books</p>
              <button className='admin_panel_add_book_button' onClick={this.addBook}>ADD BOOK</button><button className='admin_panel_view_book_button' onClick={this.viewBook}>VIEW BOOKS</button>
          </Grid>
      </Grid>
      </div>
    );
  }
}
export default Admin;
