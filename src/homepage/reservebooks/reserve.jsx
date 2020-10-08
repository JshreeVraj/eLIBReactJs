import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './reserve.scss'
import Header from '../header/header'
import {ListGroup, ListGroupItem, Accordion, Card, Button, Alert, DropdownButton, Dropdown} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { withAlert } from 'react-alert'
import BookA from './booksA';
import BookB from './booksB';
class Reserve extends React.Component {
    
    render(){
        return( <div>
            <Header/>
            <BookA/>
            <BookB/>
               </div> 
               )
    }

}

export default Reserve