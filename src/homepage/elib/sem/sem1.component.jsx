import React, { Component} from 'react';
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './ebooks.styles.scss';
import Header from '../../header/header';
import Logo from '../../../assets/download.png';
class sem1books extends Component{
    render(){
        
        return(
            <div>
              <Header/>
              <div className="Books">
                <Accordion style={{ width: '100%'}}>
                    <Card style={{ width: '80%'}}>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Engineering Mathematics-1
      </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0">
    <Table striped bordered hover variant="dark" className="table" style={{ width: '80%'}}>
  <thead>
    <tr>
      <th>S NO</th>
      <th>Book Name</th>
      <th>Author</th>
      <th>#</th></tr> </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Higher Engineering Mathematics</td>
      <td>Grewal B.S</td>
      <td><a href= "https://drive.google.com/open?id=1dZSv1p9aWgr4jd3-Of2rFKOfvJDNoMTf" target="_blank" className="link">Download</a></td></tr>
      <tr>
      <td>2</td>
      <td>Calculus: Early Transcendentals</td>
      <td>James Stewart- 7th edition</td>
      <td><a href= "https://drive.google.com/open?id=1TQlOrOWwacjYb1hR5wAalrAc3oRDIa1Q" className="link">Download</a>
      </td></tr>
</tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '100%'}}>
                    <Card style={{ width: '80%'}}>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Engineering Chemistry
      </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0">
    <Table striped bordered hover variant="dark" className="table" style={{ width: '80%'}}>
  <thead>
    <tr>
      <th>S NO</th>
      <th>Book Name</th>
      <th>Author</th>
      <th>#</th></tr> </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Engineering Chemistry</td>
      <td>P.C Jain and Monika Jain</td>
      <td><a href= "https://drive.google.com/open?id=1jS30aagZ3atKopDL5lQXPOKbvPow11mn" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '100%'}}>
                    <Card style={{ width: '80%'}}>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Problem Solving and Python Programming
      </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0">
    <Table striped bordered hover variant="dark" className="table" style={{ width: '80%'}} >
  <thead>
    <tr>
      <th>S NO</th>
      <th>Book Name</th>
      <th>Author</th>
      <th>#</th></tr> </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Think Python: How to think like a computer Scientist</td>
      <td>Allen B Downey</td>
      <td><a href= "https://drive.google.com/open?id=1V2okf3E4sX28VH39FiHjpa0O1415Wdpk" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion></div>
</div>
        );
    }
}

export default sem1books;