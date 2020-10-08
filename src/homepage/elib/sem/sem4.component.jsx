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
      Probability and Statistics
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
      <td>Miller and Freund‘s Probability and Statistics for Engineers</td>
      <td>Johnson, R.A., Miller, I and Freund J. </td>
      <td><a href= "https://drive.google.com/open?id=1NI2R4Ndp0C7HQi38Y24sbW7T8jPjMeLm" className="link">Download</a></td></tr>
      
</tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}}>
<Card>
<Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Computer Architecture
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
      <td> Computer Organization and Design: The Hardware/Software Interface</td>
      <td>David A. Patterson and John L. Hennessy</td>
      <td><a href= "https://drive.google.com/open?id=1zkS5kLOsUHA1m-p6NBlpKKL5lV2AGcf0" className="link">Download</a></td>
      </tr>
      <tr><td>2</td>
      <td>Computer Organization and Embedded Systems</td>
      <td>Carl Hamacher, Zvonko Vranesic, Safwat Zaky and Naraig Manjikian</td>
      <td><a href= "https://drive.google.com/open?id=1eVzitTW1R_5R2nhrnioBJlhlnjL4sjXI" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}} >
<Card>
<Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Database Management Systems
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
      <td>Database system concepts</td>
      <td> Abraham Silberschatz, Henry F. Korth, S. Sudharshan</td>
      <td><a href= "https://drive.google.com/open?id=1RltT9UDWvnXk3-Ffr0I0WsFleuPItYNc" className="link">Download</a></td>
      </tr>
      <tr>
      <td>2</td>
      <td>Fundamentals of Database Systems</td>
      <td> Ramez Elmasri, Shamkant B. Navathe</td>
      <td><a href= "https://drive.google.com/open?id=14ThrJaUTXUjEJ_7zxCMRkX93bUqHN8fL" className="link">Download</a></td>
      </tr>
      </tbody>
      </Table></Accordion.Collapse></Accordion>
      <Accordion style={{ width: '80%'}}>
<Card>
<Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Design and analysis of algorithms 
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
      <td>Introduction to the Design and Analysis of Algorithms</td>
      <td>Anany Levitin</td>
      <td><a href= "https://drive.google.com/open?id=1sgGb5us3XicHOclAtiDHfpk29YgJ6mEW" className="link">Download</a></td>
      </tr>
      <tr>
      <td>2</td>
      <td>Computer Algorithms/ C++</td>
      <td>Ellis Horowitz, Sartaj Sahni and Sanguthevar Rajasekaran</td>
      <td><a href= "https://drive.google.com/open?id=1jW6GuY5WgdqzWd8vekQ28ugK4MklhQf-" className="link">Download</a></td>
      </tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}} >
<Card>
<Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Operating Systems
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
      <td>Operating System Concepts</td>
      <td> Abraham Silberschatz, Peter Baer Galvin and Greg Gagne</td>
      <td><a href= "https://drive.google.com/open?id=10DY6A7DwIwXDdhZC5PD5YFm3fVAGg3Gn" className="link">Download</a></td>
      </tr>
    </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}} >
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Environmental Science and Engineering
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
      <td>Introduction to Environmental Engineering and Science</td>
      <td>Gilbert M. Masters </td>
      <td><a href= "https://drive.google.com/open?id=1YZTR8HnM12-31ZEEcwszZl8xcPrRu8Ve" className="link">Download</a></td></tr>
      
</tbody>
</Table></Accordion.Collapse></Accordion>     
</div></div>
        );
    }
}

export default sem4;