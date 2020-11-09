import React, {Component} from 'react';
import { Typography, Card, CardContent, Paper, Grid ,Button} from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import ReorderOutlinedIcon from '@material-ui/icons/ReorderOutlined';
import './css/bookList.css';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EditUser from './editUser';
import ApiService from '../services/auth.service';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



class UserList extends Component {
  constructor(props) {
      super(props)
      this.state = {
          allow:'',
          search:'',
          users:[],

          deleted:false,
      }
  }

  componentDidMount(){
      ApiService.getAllUser()
      .then((res) => {
        console.log(res.data);
        {res.data.map(row =>(
            this.setState(prevState => ({
                users: [...prevState.users, {
                    "id":row.id,
                    "username":row.username,
                    "email":row.email,
                    "roles":row.roles,
                }]
            }))
        ))}
      })
      .catch(error => {
        console.log("error");
          console.log(error);
      })
  }


  handleSearchChange=(e)=>{
    this.setState({
        search: e.target.value,
    })
  }

  cut =() =>{
    this.setState({
      search:'',
    })
  }




  deleteUser = (userId) => {

      ApiService.deleteUserById(userId)
        .then(res=>{
            this.setState({
              users:this.state.users.filter(users => users.id !== userId),
              deleted:true,
            })
            // window.location.href='./userDelete';
            alert('deleted')
            setTimeout(()=>{
              this.setState({deleted:false,})
            },2000);
        })
  }











  render(){
     const users = this.state.users;
    // const user = [{
    //       id:0,
    //       userName: 'Raghu',
    //       roles:'ROLE_USER',
    //       email: 'Raghu@yahoo.com',
    //       action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
    //     },{
    //       id:1,
    //       userName: 'Vithu',
    //       roles:'ROLE_USER',
    //       email: 'Vithu@gmail.com',
    //       action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
    //
    //     },{
    //       id:2,
    //       userName: 'Abi',
    //       roles:'ROLE_USER',
    //       email: 'Abi@gmail.com',
    //       action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
    //     },{
    //       id:3,
    //       userName: 'Alex',
    //       roles:'ROLE_USER',
    //       email: 'alex@gmail.com',
    //       action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
    //     },{
    //       id:4,
    //       userName: 'Mahi',
    //       roles:'ROLE_ADMIN',
    //       email: 'mahi@gmail.com',
    //       action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
    //     },{
    //       id:5,
    //       userName: 'Subendran',
    //       roles:'ROLE_USER',
    //       email: 'Subendran@gmail.com',
    //       action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
    //     },{
    //       id:6,
    //       userName: 'Subas',
    //       roles:'ROLE_USER',
    //       email: 'Subas@gmail.com',
    //       action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
    //     },{
    //       id:7,
    //       userName: 'Kiri',
    //       roles:'ROLE_ADMIN',
    //       email: 'Kiri@gmail.com',
    //       action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
    //     },{
    //       id:8,
    //       userName: 'm.piryan',
    //       roles:'ROLE_USER',
    //       email: 'piryan@gmail.com',
    //       action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
    //     }]
// const columns = [{
//     Header: 'Id',
//     accessor: this.state.user.id
//   },{
//     Header: 'Username',
//     accessor: this.state.user.username
//   },{
//     Header: 'Email',
//     accessor: this.state.user.email
//   },{
//     Header: 'Roles',
//     accessor: this.state.user.roles
//   }]
    return(
      <div className='bookList_mainDiv' >
        <br/>

        {this.state.deleted ?(

            <div style={{width:'960px',backgroundColor:'white',minHeight:'100px',margin:'auto', marginTop:'60px',borderRight:'20px solid black',borderLeft:'20px solid black'}}>
              <div className='secondDiv'>
                  <p style={{textAlign:'center',color:'red', fontSize:'50px', fontWeight:'bold'}}>USER DELETED SUCCESSFULLY</p>
              </div>
              <br/>
            </div>


          ):(
            <div className='bookListWarraper'>
                <br/>
              <Grid container spacing={1} >
                  <Grid item xs={6}><label style={{fontSize:'20px', marginLeft:'20px',}}><ListAltIcon style={{fontSize:'23px', marginBottom:'-4px'}} /> User List</label></Grid>
                  <Grid item xs={6}  >

                      <div style={{height:'34px',fontSize:'18px', width:'370px', marginLeft:'20px', border:'1px solid black',float:'right',marginRight:'10px', boxShadow:'1px 1px 1px 1px'}}>

                        <form onSubmit={this.submit}>
                          <CloseOutlinedIcon style={{fontSize:'30px', cursor:'pointer', float:'right'}} onClick={this.cut} />
                          <button type='submit' style={{float:'right', border:'none',backgroundColor:'white',height:'33px'}}><SearchOutlinedIcon style={{marginBottom:'-2px',fontSize:'30px'}}  /></button>
                          <input type='text' placeholder='Search Text' value={this.state.search} onChange={this.handleSearchChange} style={{float:'right',marginRight:'1px',height:'30px',fontSize:'18px', marginLeft:'20px',border:'none'}} />
                          <ReorderOutlinedIcon style={{fontSize:'33px', marginBottom:'-4px', float:'right'}} />
                        </form>

                      </div>
                  </Grid>
                  <Grid item xs={12}>


                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Username</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Roles</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map(user => (
                                  <TableRow>
                                      <TableCell>{user.id}</TableCell>
                                      <TableCell>{user.username}</TableCell>
                                      <TableCell>{user.email}</TableCell>
                                      {user.roles.map(role=>(
                                        <TableCell>{role.name}</TableCell>
                                      ))}
                                      <TableCell align="center"><Button onClick={()=>this.deleteUser(user.id)}><DeleteIcon/></Button><Button href={'/editUser/'+user.id}><EditIcon/></Button></TableCell>
                                  </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                  </Grid>
              </Grid>
              <br/>

          </div>
          )}

        <br/>
      </div>
    );
  }
}
export default UserList;
