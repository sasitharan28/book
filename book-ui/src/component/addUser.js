import React, {Component} from 'react';
import { Typography, Card, CardContent, Paper, Grid } from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import './css/addBook.css';
import SaveIcon from '@material-ui/icons/Save';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ApiService from '../services/auth.service';

class Adduser extends Component{
  constructor(props){
    super(props)
    this.state={
      userVal:'',
      emailVal:'',
      password:'',

      roleVal:'',
      role:[],
      success:false,
      successMsg:'',
      faild:'',
    }
  }








  userNameChange = (e) =>{
    this.setState({
      userVal:e.target.value
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
      roleVal:e.target.value,
      role:'"'+e.target.value+'"'
    })
    // setTimeout(()=>{alert(this.state.role)},10)
  }


  handleSubmit = (e) => {
    e.preventDefault()

    ApiService.register(this.state.userVal,this.state.emailVal,this.state.password)
    .then(res=>{
        this.setState({
            success:true,
            successMsg:'USER Add SUCCESSFULLY!',
            faild:'',
        })
        setTimeout(()=>{
            this.setState({
              success:false,
              successMsg:'',
              faild:'',
            })
            this.reset()
        },2000)
    })
    .catch(err=>{
      console.log(err);
        this.setState({
            faild:'PLEASE FILL ALL FIELDS!!',
        })
        setTimeout(()=>{
          this.setState({
              faild:'',
          })
        },2000)
    })

  }

  reset = () => {
    this.setState({
      userVal:'',
      emailVal:'',
      password:'',

      roleVal:'',
      success:false,
      successMsg:'',
      faild:'',
    })
  }

  goUserList= () => {
    window.location.href='/userList';
  }

  render(){
    return(
      <div className='addBook_mainDiv'>
        <br/>

            <h1><LibraryAddIcon/> ADD NEW USER</h1>


        <div className='addBookWarraper'>
        {! this.state.successMsg && (
            <form onSubmit={this.handleSubmit}>
              <Grid container spacing={3} style={{ backgroundColor:`white` }}>
                <Grid item xs={6}>
                  <input type='text' value={this.state.userName} onChange={this.userNameChange} required   placeholder='Username' className='titleIp' /><br/>
                  <label>Enter Username</label>
                </Grid>
                <Grid item xs={6}>
                  <input type='email' value={this.state.emailVal} onChange={this.emailChange} required   placeholder='Email' className='titleIp' /><br/>
                  <label>Enter Email Address</label>
                </Grid>
                <Grid item xs={6}>
                  <select value={this.state.roleVal} onChange={this.roleChange} className='titleIp'>
                    <option>user</option>
                    <option>admin</option>
                  </select><br/>
                  <label>Please select ROLE</label>
                </Grid>

                    <Grid item xs={6}>
                      <input type='password' value={this.state.password} onChange={this.password} required   placeholder='Password' className='titleIp' /><br/>
                      <label>Enter Password</label>
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
export default Adduser;
