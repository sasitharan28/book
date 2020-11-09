import React, { Component } from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './bottom.css';
class Bottom extends React.Component{
  
  render(){

    let year = new Date().getFullYear();
    return(
      <footer className='bottom_div' >
        <p id='bottom_div_text'>{year}-{year+1} ALL RIGHTS RESERVED BY SASITHARAN </p>
      </footer>
    );



  }
}
export default Bottom;
