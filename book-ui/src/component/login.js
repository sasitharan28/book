import React, { Component } from 'react';
import './css/login.css';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import ApiService from '../services/auth.service'

class Login extends React.Component{

  constructor(props) {
      super(props)
      this.state = {
           username: '',
           password: '',
      }
  }

  handleUsernameChange = (event) => {
      this.setState({
          username: event.target.value,
      })
  }

  handlePasswordChange = (event) => {
      this.setState({
          password: event.target.value
      })
  }

  componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('passwordLengthError', (value) => {
            if (value.length <6 && value.length>0) {
                return false;
            }
            return true;
        });

        ValidatorForm.addValidationRule('UsernameLengthError',(value) => {
          if (value.length <3 && value.length>0){
            return false;
          }
          return true;
        })
    }


  handleSubmit = (event) => {
      event.preventDefault()
      ApiService.login(this.state.username,this.state.password)
      .then(res=>{
          console.log(res);
          localStorage.setItem("user",res);
          localStorage.setItem("id",res.id);
          localStorage.setItem('username', res.username);
          localStorage.setItem('email', res.email);
          localStorage.setItem('roles', res.roles);
          localStorage.setItem('basicToken',res.basicToken)
           window.location.href="/";
      })
      // if (this.state.username && this.state.password) {
      //       let rand=Math.floor(Math.random() * 100) + 1 ;
      //       console.log("username = " + this.state.username)
      //       console.log("password = " + this.state.password)
      //       localStorage.setItem('id', rand);
      //       localStorage.setItem('username', this.state.username);
      //       localStorage.setItem('email', 'sasi@gmail.com');
      //       localStorage.setItem('roles', 'ROLE_ADMIN');
      //       this.props.history.push("/profile");
      //       window.location.reload();
      // }
  }


  render(){
    return(
      <div id='login_main'>
      <ValidatorForm onSubmit={this.handleSubmit}>
        <div id='loginForm'>
            <br/>
            <h1>Login to Book Shop</h1>
            <div>

                <br/>

                <TextValidator
                label='Username'
                  type='text'
                  id='userNameIp'
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  validators={['required','UsernameLengthError']}
                  errorMessages={['This field is required','The password must be between 3 and 20 charaters.']}
                />

                <br/><br/>
            </div>
            <div>


                <TextValidator
                  label='Password'
                  type='password'
                  id='userPasswordIp'
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  validators={['required','passwordLengthError']}
                  errorMessages={['This field is required','The password must be between 6 and 40 charaters.']}
                />

                <br/><br/><br/>
            </div>
            <div>


            </div>
            <button type='submit' id='submitBtn'>Submit</button>

          </div>





        </ValidatorForm>
        </div>
    );
  }
}
export default Login;
