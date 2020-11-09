import React, { Component } from 'react';
import './navication.css';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Home from './home';

class Navication extends Component {
  render() {
     return(
        <React.Fragment>
            <Router>
              <div className='nav_div'>
                 <ul>
                   <li>
                      <Link to="/" className='homeLink'>BOOK SHOP</Link>

                   </li>
                    <li>
                       <Link to="/" className='homeLink'>HOME</Link>
                    </li>
                    <li>
                       <Link to="/about" className='signupLink'>SIGN UP</Link>
                    </li>
                    <li>
                       <Link to="/contact" className='loginLink'>LOGIN</Link>
                    </li>
                 </ul>
                 <Route exact path="/" component={Home}/>
                 <Route path="/about" component={About}/>
                 <Route path="/contact" component={Contact}/>
              </div>
           </Router>
        </React.Fragment>
     )
  }
}


export default Navication;
