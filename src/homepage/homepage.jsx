import React from 'react';
import Header from '../homepage/header/header';
import Directory from '../mainpage/directory/directory';
import './homepage.scss';
import {auth} from '../services/firebase';


const HomePage = () => (
    <div className='homepage'>
        <Header />
        <Directory/>
    </div>
);

export default HomePage;
