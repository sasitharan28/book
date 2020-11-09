import React, { Component } from 'react';
import './css/signup.css';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import SimpleReactValidator from 'simple-react-validator';
import ApiService from '../services/auth.service'

class Signup extends React.Component{

  constructor(props){
    super(props)
    this.state={
      username:'',
      password:'',
      email:'',
      success:false,
      successMsg:'',
    }
  }

  handleUsernameChange = (e) =>{
    this.setState({
      username:e.target.value,
    })
  }
  handleEmailChange = (e) =>{
    this.setState({
      email:e.target.value,
    })
  }
  handlePasswordChange = (e) => {
    this.setState({
      password:e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });
    ApiService.register(
      this.state.username,
      this.state.email,
      this.state.password
    ).then(response => {
        this.setState({
          message: response.data.message,
          successful: true,
          successMsg:'USER REGISTERED SUCCESSFULLY!',
        });
        setTimeout(() => {
            this.setState({successMsg:""})
            window.location.href="/login"
        },2500);
      })


    // e.preventDefault()
    // if ( this.state.username.length>2 && this.state.email.length>2 && this.state.password.length>2 ){
    //   this.setState({
    //     success:true,
    //     successMsg:'USER REGISTERED SUCCESSFULLY!',
    //   })
    //
    //
    // }else{
    //   this.setState({
    //     success:false,
    //     successMsg:'',
    //   })
    // }
  }


  componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('passLengthError', (value) => {
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


  render(){





    return(
      <div id='signup_main'>
        <div id='signupForm'>
          {!this.state.success && (
            <ValidatorForm onSubmit={this.handleSubmit}>
              <br/>
              <h1>Register Account at Book Shop</h1>


              <TextValidator
                label="Username"
                type='Text'
                id='signupUserNameIp'
                value={this.state.username}
                onChange={this.handleUsernameChange}
                validators={['required','UsernameLengthError']}
                errorMessages={['this field is required','The password must be between 3 and 20 charaters.']}
              />
              <br/>
              <br/>


              <TextValidator
                label="Email"
                type="Text"
                id='signupEmailIp'
                value={this.state.email}
                onChange={this.handleEmailChange}
                validators={['required','isEmail']}
                errorMessages={['This field is required','This is not a valid email.!!']}
              />
              <br/>
              <br/>


              <TextValidator
                label="Password"
                type='password'
                id='signupPasswordIp'
                value={this.state.password}
                onChange={this.handlePasswordChange}
                validators={['required','passLengthError']}
                errorMessages={['this field is required','The password must be between 6 and 40 charaters.']}
              />


                        <br/><br/>
              <button type='submit' id='submitBtn'>Submit</button>
            </ValidatorForm>
          )}
          {this.state.successMsg&&(
            <div>
              <br/><br/>
              <h1>{this.state.successMsg}</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Signup;
