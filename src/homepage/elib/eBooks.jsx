import React from 'react';
import Header from '../header/header';
import BookDirectory from './eDirectory/eBookDirectory';
import './eBooks.scss';


const eBook = () => (
    <div className='ehomepage'>
        <Header/>
        <BookDirectory/>
    </div>
);

export default eBook;
