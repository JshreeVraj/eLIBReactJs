import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './reserve.scss'
import Header from '../header/header'
import {ListGroup, ListGroupItem, Accordion, Card, Button, Alert, DropdownButton, Dropdown} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { withAlert } from 'react-alert'
class bookB extends React.Component {
    
    state = { 
        BooksA: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksB')
        .get()
        .then( snapshot => {
            const BooksB =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksB.push(data)
            })
            this.setState({ BooksB: BooksB})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div className='align'>
               <div>
                    {
                    this.state.BooksB &&
                    this.state.BooksB.map( BooksB => {
                        return(
                            <div>
                                
  <Table striped bordered hover variant="dark"  className="align" style={{ width: '80%'}} >
      <tbody>
    <tr>
      <td>{BooksB.bname}</td>
      <td><DropdownButton id="dropdown-basic-button" title="Reserve">
                        <Dropdown.Item>DLIT{BooksB.accno}</Dropdown.Item></DropdownButton></td>
      </tr>
      
</tbody>
</Table>
                    </div>
                        )
                        })
                }
            </div>
</div>
</div>
        )
    }

}

export default bookB