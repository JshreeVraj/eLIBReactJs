import React, { Component}from 'react';
import { Link } from 'react-router-dom';
import './mainpage.scss';
import '../sign-in-sign-up/sign-in-sign-up.scss';
import Logo from '../assets/msec.png';
import Book from '../assets/book.png';
import Logof from '../assets/logof.png';
 
class mainpg extends Component{
    render(){
    return(
        <div style={{backgroundColor: ' #2E4158'}}>
             <div className="body" >
             <img src={Logo} width='17%' height='17%'/><br></br><br></br>
             <h1 className="heading">
                 Meenakshi Sundararajan Engineering College<br></br>
                 Department Of Information Technology
             </h1><br></br>
             <img src={Logof} width='25%' height='25%' /><br></br><br></br>
        <div><button className="FormField__Button mr-20"><Link to='/SignUp' className="options"> Click here to Log In !  </Link></button><br></br><br></br>
        <br/></div>
        <div classname="secon" style={{backgroundColor: ' #2E4158'}}></div>  
         </div></div>

    );
}
}

export default mainpg;