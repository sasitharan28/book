import React, {Component} from 'react';
import { Typography, Card, CardContent, Paper, Grid } from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import './css/addBook.css';
import SaveIcon from '@material-ui/icons/Save';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Adduser from './addUser.js';

import ApiService from'../services/auth.service';

class EditUser extends Component {
  constructor(props){
    super(props)
    this.state={
      userId:'',
      userName:'',
      userVal:'',
      emailVal:'',
      password:'',

      roleVal:'',
      success:false,
      successMsg:'',
      faild:'',



    }
  }




    componentDidMount(){
        const userId = this.props.match.params.id;
        this.getUser(userId)
        this.setState({
            userId:userId,
        })

    }

    getUser(userId){
        ApiService.getUserById(userId)
        .then( res => {
          console.log(res.data.id);
            this.setState({
              userName:res.data.username,
              emailVal:res.data.email,
            })
        })
    }




  userNameChange = (e) =>{
    this.setState({
      userName:e.target.value
    })
  }
  emailChange = (e) =>{
    this.setState({
      emailVal:e.target.value
    })
  }

  password = (e) =>{
    this.setState({
      password:e.target.value
    })
  }



  roleChange = (e) =>{
    this.setState({
      roleVal:e.target.value
    })
  }


  handleSubmit = (e) => {
  e.preventDefault()
  const user = {
    id:this.state.userId,
    username:this.state.userName,
    email:this.state.emailVal,
  }
  ApiService.updateUserById(user)
  .then(res=>{
      this.setState({
        success:true,
        successMsg:'USER ADD SUCCESSFULLY!',
        faild:'',
      })
      setTimeout(() => {
        this.setState({
            success:false,
            successMsg:'',
            faild:'',
        })
      },2000)
  })
  .catch(err=>{
    console.log(err);
    this.setState({
      faild:'PLEASE FILL ALL FIELDS!!',
    })
    setTimeout(() => {
      this.setState({
          faild:'',
      })
    },2000)
  })
    // if ( this.state.roleVal.length>1 && this.state.emailVal.length>1 && this.state.userVal.length>1  ){
    //   this.setState({
    //     success:true,
    //     successMsg:'USER ADD SUCCESSFULLY!',
    //     faild:'',
    //   })
    //
    //
    //
    // }else{
    //   this.setState({
    //     faild:'PLEASE FILL ALL FIELDS!!',
    //   })
    // }
  }

  reset = () => {
    this.getUser(this.state.userId)
  }



  goUserList= () => {
    window.location.href='/userList';
  }

  render(){



    return(
      <div className='addBook_mainDiv'>
        <br/>


            <h1><LibraryAddIcon/> UPDATE USER</h1>


        <div className='addBookWarraper'>
        {! this.state.successMsg && (
            <form onSubmit={this.handleSubmit}>
              <Grid container spacing={3} style={{ backgroundColor:`white` }}>
                <Grid item xs={6}>
                  <input type='text' value={this.state.userName} onChange={this.userNameChange}   placeholder='Username' className='titleIp' /><br/>
                  <label>Enter Username</label>
                </Grid>
                <Grid item xs={6}>
                  <input type='text' value={this.state.emailVal} onChange={this.emailChange}   placeholder='Email' className='titleIp' /><br/>
                  <label>Enter Email Address</label>
                </Grid>
                <Grid item xs={6}>
                  <select value={this.state.roleVal} onChange={this.roleChange} className='titleIp'>
                    <option>Select Role</option>
                    <option>User Role</option>
                    <option>Admin Role</option>
                  </select><br/>
                  <label>Please select your ROLE</label>
                </Grid>
                <Grid item xs={6}>
                </Grid>

                <br/>

                {this.state.faild && (
                  <strong style={{color:'red', textAlign:'center', fontSize:'18px', margin:'auto'}}>{this.state.faild}</strong>
                )}
                <Grid item xs={12}>

                  <button type='button' className='bookListBtn' onClick={this.goUserList} ><ListAltIcon style={{fontSize:'20px', marginBottom:'-4px'}} /> User List</button>
                  <button type='reset' className='resetBtn' onClick={this.reset}><RotateLeftIcon style={{fontSize:'20px', marginBottom:'-4px'}} /> Reset</button>
                  <button type='submit' className='saveBtn'><SaveIcon style={{fontSize:'18px', marginBottom:'-2px'}}/> Save</button>
                </Grid>
              </Grid>
              </form>
            )}
            {this.state.successMsg && (
              <h3 style={{color:'red', fontSize:'25px', margin:'auto'}}>{this.state.successMsg}</h3>
            )}
        </div>

        <br/>
      </div>
    );
  }
}
export default EditUser;
