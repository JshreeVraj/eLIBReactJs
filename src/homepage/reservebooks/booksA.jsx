import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './reserve.scss'
import Header from '../header/header'
import {ListGroup, ListGroupItem, Accordion, Card, Button, Alert, DropdownButton, Dropdown} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { withAlert } from 'react-alert'
class bookA extends React.Component {
    
    state = { 
        BooksA: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksA')
        .get()
        .then( snapshot => {
            const BooksA =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksA.push(data)
            })
            this.setState({ BooksA: BooksA})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div className='align'>
               <div>
               <Table striped bordered hover variant="dark" className="align" style={{ width: '80%'}}>
  <thead>
    <tr>
      
      <th>Book Name</th>
      <th>Reserve</th></tr></thead>
  </Table>
                    {
                    this.state.BooksA &&
                    this.state.BooksA.map( BooksA => {
                        return(
                            <div>
                                
  <Table striped bordered hover variant="dark"  className="align" style={{ width: '80%'}} >
      <tbody>
    <tr>
      <td>{BooksA.bname}</td>
      <td><DropdownButton id="dropdown-basic-button" title="Reserve">
                        <Dropdown.Item>DLIT{BooksA.accno}</Dropdown.Item></DropdownButton></td>
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

export default bookA