import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import {auth} from '../../services/firebase';
import Logo1 from '../../assets/book.png';
import Logof from '../../assets/logof.png'

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to ="/HomePage">
        <img src={Logof} width='150%' height= '300%' />
        </Link>
        {
            currentUser ?
            <Link className='options' onClick={() => auth.signOut()} to= '/HomePage'>SIGN OUT</Link>
            :
            <Link className='options' to='/Signup#/sign-in'>SIGN OUT </Link>
        }     
      </div>
)

export default Header;