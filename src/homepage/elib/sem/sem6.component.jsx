import React, { Component} from 'react';
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Header from '../../header/header';
import './ebooks.styles.scss';
class sem6 extends Component{
    render(){
        
        return(
            <div className="body">
              <Header/>
              <div className="Books">
                <Accordion style={{ width: '80%'}}>
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Computational Intelligence
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
      <td>Artificial Intelligence: A Modern Approach</td>
      <td> Stuart Russell, Peter Norvig</td>
      <td><a href= "https://drive.google.com/open?id=1Im7v6MdCcVX10tdA2kqVO9t1wWblzMqL" className="link">Download</a></td></tr>
      <tr>
      <td>2</td>
      <td>Artificial Intelligence</td>
      <td>Elaine Rich and Kevin Knight</td>
      <td><a href= "https://drive.google.com/open?id=1oy6BubncWn_PQd2-AKLzA7WpevDyNCUm" className="link">Download</a>
      </td></tr>
</tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}}>
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
       Object Oriented Analysis And Design
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
      <td>Object Oriented Systems Development - McGraw Hill International Edition - 1999</td>
      <td>Craig Larman </td>
      <td><a href= "https://drive.google.com/open?id=1PxMm1KDW27ejhROPQtgvkUSUUMLTndit" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}}>
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Mobile Computing
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
      <td>Mobile Communications</td>
      <td>JOCHEN SCHILLER</td>
      <td><a href= "https://drive.google.com/open?id=1INcEpPrEcvUqesuCIRWBdvaQlaUKhblw" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}}>
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        BIG DATA ANALYTICS
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
      <td>Big Data Analytics: From Strategic Planning to Enterprise Integration with Tools, Techniques, NoSQL, and Graph</td>
      <td>David Loshin</td>
      <td><a href= "https://drive.google.com/open?id=1R0ypQHaTiIW4fWOYsJ1-omLBwZbMs50u" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}}>
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Computer Graphics and Multimedia 
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
      <td>Computer Graphics</td>
      <td> Donald Hearn and Pauline Baker M</td>
      <td><a href= "https://drive.google.com/open?id=1xqyp0rtNMfTpVuYIB74h_x5M7JXm0rTm" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>

<Accordion style={{ width: '80%'}}>
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Graph Theory and Applications
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
      <td>Graph Theory with Application to Engineering and Computer Science</td>
      <td>Narsingh Deo</td>
      <td><a href= "https://drive.google.com/open?id=1_0Nq6CnYrtrLlwEzPzQGepOHARYZg00k" className="link">Download</a></td></tr>
<tr>
      <td>2</td>
      <td>Graph Theory Applications</td>
      <td>L.R.Foulds </td>
      <td><a href= "https://drive.google.com/open?id=1fWv3swam6T-jcqiXe6Ho7e3Ju5srmlB9" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}}>
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Digital Signal Processing
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
      <td>Digital Signal Processing – Principles, Algorithms & Applications</td>
      <td>John G. Proakis & Dimitris G.Manolakis</td>
      <td><a href= "https://drive.google.com/open?id=18jVWVKq0etr940erWCDahxe1pCEJUbO9" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}}>
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
         Information Storage and Management
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
      <td>Information Storage and Management</td>
      <td> EMC Corporation, Wiley</td>
      <td><a href= "https://drive.google.com/open?id=1y4F09dwm9FKACp3qrTmdVzcaV9zkOtUa" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>

<Accordion style={{ width: '80%'}}>
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Agile Methodologies
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
      <td>Agile Software Engineering, Series: Undergraduate Topics in Computer Science</td>
      <td>Hazza and Dubinsky</td>
      <td><a href= "https://drive.google.com/open?id=1OJQbAZrcXIRiC_n383sQEVH2GxVDhr9W" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion>
<Accordion style={{ width: '80%'}}>
                    <Card>
                        <Card.Header classname="card">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
       Embedded Systems
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
      <td>Embedded C</td>
      <td>Michael J. Pont</td>
      <td><a href= "https://drive.google.com/open?id=1wuGdc22N4z9ZA4QKbs6yTqxRkUfmW9gi" className="link">Download</a></td></tr>
      </tbody>
</Table></Accordion.Collapse></Accordion></div></div>
 );
    }
}

export default sem6;