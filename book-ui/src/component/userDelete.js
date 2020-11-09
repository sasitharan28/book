import React, {Component} from 'react';
import './css/delete.css';
class UserDelete extends Component {
  render(){
    setTimeout(() => {
      window.location.href='/userList';
    }, 2000);
    return(
      <div style={{width:'1000px',backgroundColor:'black',minHeight:'100px',margin:'auto', marginTop:'60px'}}>
        <div className='secondDiv'>
            <p style={{textAlign:'center',color:'red', fontSize:'50px', fontWeight:'bold'}}>USER DELETED SUCCESSFULLY</p>
        </div>
        <br/>
      </div>
    );
  }
}
export default UserDelete;
