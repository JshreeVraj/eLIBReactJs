import React, { Component} from 'react';
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './ebooks.styles.scss';
import Header from '../../header/header';
import Logo from '../../../assets/download.png';
import {Container,Col,Row} from 'react-bootstrap';
class sem2 extends Component{
    render(){
        
        return(
            <div className="eBooks">
                <Header/>
                <div className="Books">
                <Accordion style={{ width: '100%'}} >
                    <Card style={{ width: '80%'}}>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Engineering Mathematics-2
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
      <td><a href= "https://drive.google.com/open?id=1o7AbZ0abeRXZeKdV8kINCVcxLSICwL2K" className="link">Download</a></td></tr>
      <tr>
      <td>2</td>
      <td>Advanced Engineering Mathematics</td>
      <td>Kreyszig Erwin</td>
      <td><a href= "https://drive.google.com/open?id=1hmXjtB6G1SeUdlXccgTtMNXS8fm1r3-c" className="link">Download</a>
      </td></tr>
</tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '100%'}}>
                    <Card style={{ width: '80%'}}>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Basic Electrical Electronics and Measurements
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
      <td>Quick Notes</td>
      <td>-</td>
      <td><a href= "https://drive.google.com/open?id=1U8Ql65_X8lYN7X4qRvYXwp-l2rBpoMd2" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '100%'}}>
<Card style={{ width: '80%'}}>
<Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Information Technology Essentials
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
      <td>Learning php mysql javascript css & html5</td>
      <td>Robin Nixon</td>
      <td><a href= "https://drive.google.com/open?id=1RsXeSsHRFS6fKmPgzEVUl_LOr7CxgA5M" className="link">Download</a></td>
      </tr><tr><td>2</td>
      <td>Computer networking a top-down approach</td>
      <td>James F Kurose</td>
      <td><a href= "https://drive.google.com/open?id=1j_VsBvjR7KbVT0WigLLEyucmBsMb3Rcd" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '100%'}}>
<Card style={{ width: '80%'}}>
<Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Programming in C
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
      <td>The c programming language</td>
      <td>Kernighan B.W and Ritchie D.M </td>
      <td><a href= "https://drive.google.com/open?id=1E3hDeTYW4tUG0-XknrzAAcVLVScUdjwb" className="link">Download</a></td>
      </tr>
      </tbody>
</Table></Accordion.Collapse></Accordion></div></div>
        );
    }
}

export default sem2;