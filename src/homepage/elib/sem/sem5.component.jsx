import React, { Component} from 'react';
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './ebooks.styles.scss';
import Header from '../../header/header';
import {Container,Col,Row} from 'react-bootstrap';
class sem4 extends Component{
    render(){
        
        return(
            <div>
                <Header/>
                <div className="Books">
                <Accordion style={{ width: '80%'}} >
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Computer Networks
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
      <td> Data Communications and Networking</td>
      <td>Behrouz A. Forouzan</td>
      <td><a href= "https://drive.google.com/open?id=13HHQBBO58orE8B3K3RpQLPJwOQf6jUwe" className="link">Download</a></td></tr>
      
</tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}} >
<Card>
<Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Microprocessors and Microcontrollers
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
      <td> The 8051 Microcontroller   and Embedded Systems: Using Assembly and C</td>
      <td>Mohamed Ali Mazidi, Janice Gillispie Mazidi, Rolin McKinlay</td>
      <td><a href= "https://drive.google.com/open?id=1if3M9xoXlkfrpjkNj0co7cjyMcZ2mp6Q" className="link">Download</a></td>
      </tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}}>
<Card>
<Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Web Technology
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
      <td>Web Technologies--A Computer Science Perspective</td>
      <td> Jeffry C Jackson</td>
      <td><a href= "https://drive.google.com/open?id=1ws0hUrL38g7gYiNLbJXqskr9ojVBzy3_" className="link">Download</a></td>
      </tr>
      </tbody>
      </Table></Accordion.Collapse></Accordion>
      <Accordion style={{ width: '80%'}}>
<Card>
<Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Software Engineering
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
      <td>Software Engineering – A Practitioner‟s Approach</td>
      <td>Roger S. Pressman</td>
      <td><a href= "https://drive.google.com/open?id=19UZl2irtq9CGiYl_jBiPLqbSg7n7vxj9" className="link">Download</a></td>
      </tr>
      <tr>
      <td>2</td>
      <td>Software Engineering</td>
      <td>Ian Sommerville</td>
      <td><a href= "https://drive.google.com/open?id=1TCgdCkFwI-NSF5lobwrwttzQiGof7p_I" className="link">Download</a></td>
      </tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
</div></div>
        );
    }
}

export default sem4;