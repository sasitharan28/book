import React, {Component} from 'react';
import { Typography, Card, CardContent, Paper, Grid } from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import './css/addBook.css';
import SaveIcon from '@material-ui/icons/Save';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ListAltIcon from '@material-ui/icons/ListAlt';


class Indoor extends Component {
  constructor(props){
    super(props)
    this.state={
      titleVal:'',
      authorVal:'',
      coverPhotoUrlVal:'',
      isbnNumVal:'',
      priceVal:'',
      languageVal:'',
      genreVal:'',
      success:false,
      successMsg:'',
      faild:'',
      sender:this.props.page,
      fnish:'',
    }
  }








  titleChange = (e) =>{
    this.setState({
      titleVal:e.target.value
    })
  }
  authorChange = (e) =>{
    this.setState({
      authorVal:e.target.value
    })
  }
  coverPhotoUrlChange = (e) =>{
    this.setState({
      coverPhotoUrlVal:e.target.value
    })
  }
  isbnNumberChange = (e) =>{
    this.setState({
      isbnNumVal:e.target.value
    })
  }

  priceChange = (e) =>{
    this.setState({
      priceVal:e.target.value
    })
  }

  languageChange = (e) =>{
    this.setState({
      languageVal:e.target.value
    })
  }

  genreChange = (e) =>{
    this.setState({
      genreVal:e.target.value
    })
  }

  handleSubmit = (e) => {

    e.preventDefault()
    if ( this.state.genreVal.length>2 && this.state.languageVal.length>2 && this.state.priceVal.length>1 && this.state.isbnNumVal.length>1 && this.state.coverPhotoUrlVal.length>2 && this.state.authorVal.length>2 && this.state.titleVal.length>2  ){
      this.setState({
        success:true,
        successMsg:'USER REGISTERED SUCCESSFULLY!',
        faild:'',
        fnish:'okey',
      })



    }else{
      this.setState({
        faild:'PLEASE FILL ALL FIELDS!!',
      })
    }
  }

  reset = () => {
    this.setState({
      titleVal:'',
      authorVal:'',
      coverPhotoUrlVal:'',
      isbnNumVal:'',
      priceVal:'',
      languageVal:'',
      genreVal:'',
      success:false,
      successMsg:'',
      faild:'',
    })
  }

  goBookList= () => {
    window.location.href='/bookList';
  }

  render(){
    {this.state.fnish && (

      setTimeout(() => {
        window.location.href='/';
      }, 2000)

    )}
    return(
      <div className='addBook_mainDiv'>
        <br/>
        <h1><LibraryAddIcon/> ADD NEW BOOK</h1>

        <div className='addBookWarraper'>
        {! this.state.successMsg && (
            <form onSubmit={this.handleSubmit}>
              <Grid container spacing={3} style={{ backgroundColor:`white` }}>
                <Grid item xs={6}>
                  <input type='text' value={this.state.titleVal} onChange={this.titleChange}   placeholder='Title' className='titleIp' /><br/>
                  <label>Enter Book Title</label>
                </Grid>
                <Grid item xs={6}>
                  <input type='text' value={this.state.authorVal} onChange={this.authorChange}   placeholder='Author' className='titleIp' /><br/>
                  <label>Enter Book Author</label>
                </Grid>
                <Grid item xs={6}>
                  <input type='url' value={this.state.coverPhotoUrlVal} onChange={this.coverPhotoUrlChange}   placeholder='Cover Photo URL' className='titleIp' /><br/>
                  <label>Enter Book Cover Photo URL</label>
                </Grid>
                <Grid item xs={6}>
                  <input type='text' value={this.state.isbnNumVal} onChange={this.isbnNumberChange}   placeholder='ISBN Number' className='titleIp' /><br/>
                  <label>Enter Book ISBN Number</label>
                </Grid>
                <Grid item xs={4}>
                  <input type='number' value={this.state.priceVal} onChange={this.priceChange}   placeholder='Price (LKR)' className='titleIp' /><br/>
                  <label>Enter Book Price (LKR)</label>
                </Grid>
                <Grid item xs={4}>
                  <select value={this.state.languageVal} onChange={this.languageChange} className='titleIp'>
                    <option>Select Language</option>
                    <option>Tamil</option>
                    <option>English</option>
                    <option>Hindi</option>
                  </select><br/>
                  <label>Enter Book Price (LKR)</label>
                </Grid>
                <Grid item xs={4}>
                  <select value={this.state.genreVal} onChange={this.genreChange} className='titleIp'>
                    <option>Select Genre</option>
                    <option>Classic</option>
                    <option>Comic</option>
                    <option>Crime</option>
                    <option>Cookbook</option>
                    <option>Guide</option>
                  </select><br/>
                  <label>Enter Book Price (LKR)</label>
                </Grid>
                {this.state.faild && (
                  <strong style={{color:'red', textAlign:'center', fontSize:'18px', margin:'auto'}}>{this.state.faild}</strong>
                )}
                <Grid item xs={12}>

                  <button type='button' className='bookListBtn' onClick={this.goBookList} ><ListAltIcon style={{fontSize:'20px', marginBottom:'-4px'}} /> Book List</button>
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
export default Indoor;
