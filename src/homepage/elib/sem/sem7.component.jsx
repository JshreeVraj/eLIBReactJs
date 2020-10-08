
import React, { Component} from 'react';
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Header from '../../header/header';
import './ebooks.styles.scss';
class sem7 extends Component{
    render(){
        
        return(
            <div className="body">
              <Header/>
              <div className="Books">
                <Accordion style={{ width: '80%'}}>
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Principles of Mangagement
      </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0">
    <Table striped bordered hover variant="dark" className="table" >
  <thead>
    <tr>
      <th>S NO</th>
      <th>Book Name</th>
      <th>Author</th>
      <th>#</th></tr> </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Management</td>
      <td>Stephen P. Robbins & Mary Coulter</td>
      <td><a href= "https://drive.google.com/open?id=1dCPRSQdCUB3_Vtom6oiCt-NpJHQHQ0V6" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}}>
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Cryptography and Network Security
      </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0">
    <Table striped bordered hover variant="dark" className="table" >
  <thead>
    <tr>
      <th>S NO</th>
      <th>Book Name</th>
      <th>Author</th>
      <th>#</th></tr> </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td> Cryptography and Network Security: Principles and Practice</td>
      <td>William Stallings</td>
      <td><a href= "https://drive.google.com/open?id=1eRKx_l6yJteYJiqxwz79HkUwqeOVaJBO" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}}>
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
         Cloud Computing
      </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0">
    <Table striped bordered hover variant="dark" className="table" >
  <thead>
    <tr>
      <th>S NO</th>
      <th>Book Name</th>
      <th>Author</th>
      <th>#</th></tr> </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Distributed and Cloud Computing, From Parallel Processing to the Internet of Things</td>
      <td>Kai Hwang, Geoffrey C. Fox, Jack G. Dongarra</td>
      <td><a href= "https://drive.google.com/open?id=1BoR21L-_a5CoqUQGzdVD6UgKZu9uosvm" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion></div></div>
 );
    }
}

export default sem7;