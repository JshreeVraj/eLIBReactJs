import React, { Component} from 'react';
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './ebooks.styles.scss';
import Header from '../../header/header';
import {Container,Col,Row} from 'react-bootstrap';
class sem3 extends Component{
    render(){
        
        return(
            <div className="eBooks">
                <Header/>
                <div className="Books">
                <Accordion style={{ width: '80%'}} >
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Discrete Mathematics 
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
      <td>Discrete Mathematics and its Applications</td>
      <td>Rosen, K H</td>
      <td><a href= "https://drive.google.com/open?id=1FsY_vR66UNAP2t0xwnsWzUtGZBMwlkp7" className="link">Download</a></td></tr>
      
</tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}} >
<Card>
<Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Object Oriented Programming
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
      <td>Java The complete reference</td>
      <td>Herbert Schildt</td>
      <td><a href= "https://drive.google.com/open?id=1WNwHh9wn3QACgDgxMtW1v2pZ9mFd9iaP" className="link">Download</a></td>
      </tr>
      <tr><td>2</td>
      <td>Core Java Volume –I Fundamentals</td>
      <td>Cay S. Horstmann, Gary cornell</td>
      <td><a href= "https://drive.google.com/open?id=1QUo2WjnhItZgpL--synrzdvbW728zoCc" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}}>
<Card>
<Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Data Structures
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
      <td>The c programming language C</td>
      <td>Reema Thareja</td>
      <td><a href= "https://drive.google.com/open?id=1x7tE0rObOdEVauyPESUg1Lq0vQM3sits" className="link">Download</a></td>
      </tr>
      <tr>
      <td>2</td>
      <td>Data Structures and Algorithm Analysis in C</td>
      <td>Mark Allen Weiss</td>
      <td><a href= "https://drive.google.com/open?id=1tv2LoYyyygqiqCfppXk_WNnHfycZWmiN" className="link">Download</a></td>
      </tr>
      </tbody>
      </Table></Accordion.Collapse></Accordion>
      <Accordion style={{ width: '80%'}} >
<Card>
<Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Analog and Digital Communication
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
      <td>Advanced Electronic Communication Systems</td>
      <td>Wayne Tomasi</td>
      <td><a href= "https://drive.google.com/open?id=1jEBesnl-Ox24k13s8m0tATsvGgkNuFZi" className="link">Download</a></td>
      </tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
</div></div>
        );
    }
}

export default sem3;