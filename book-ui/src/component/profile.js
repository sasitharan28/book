import React, {Component} from 'react';
import './css/profile.css';
class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      username:localStorage.getItem('username'),
      email:localStorage.getItem('email'),
      id:localStorage.getItem('id'),
      roles:localStorage.getItem('roles'),
    };
  }
  render(){
    return(
      <div className='profile_mainDiv'>
        <div className='proInfoDiv'>
          <br/>
          <h1>Profile Information</h1><hr/>
          <label>{this.state.id}</label><br/>
          <label>{this.state.username}</label><br/>
          <label>{this.state.email}</label><br/>
          <label>{this.state.roles}</label><br/>
          <br/>
        </div>
      </div>
    );
  }
}
export default Profile;
