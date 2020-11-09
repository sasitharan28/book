import React, { Component } from 'react';
import './css/home.css';
class Home extends React.Component{
  render(){
    return(
      <div id='home_main' height="1000px">
        <div id='textDiv'>
          <h1>Welcome to Book Shop</h1>
          <p>Good friends, good books, and a sleepy conscience: this is the ideal life.</p>
          <p>-Mark Twain</p>
        </div>
      </div>
    );
  }
}
export default Home;
