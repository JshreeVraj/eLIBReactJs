import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {Accordion, Card, Button} from 'react-bootstrap';
import Header from '../header/header';
import BooksA from './booksA.component';
import BooksB from './booksB.component';
import BooksC from './booksC.component';
import BooksD from './booksD.component';
import BooksE from './booksE.component';
import BooksF from './booksF.component';
import BooksGH from './booksGH.component';
import BooksI from './booksI.component';
import BooksM from './booksM.component';
import BooksNO from './booksNO.component';
import BooksP from './booksP.component';
import BooksS from './booksS.component';
import BooksT from './booksT.component';
import BooksW from './booksW.component';

class deptLib extends Component{
     render(){
    return(
        <div >
        <Header/>
        <div className='Books' padding='180px'>
    <Accordion style={{ width: '80%'}}>
    <Card style={{ width: '80%'}}>
    <Card.Header classname="card">
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Books A
    </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0"><BooksA /></Accordion.Collapse></Accordion>

    <Accordion style={{ width: '80%'}}>
    <Card style={{ width: '80%'}}>
    <Card.Header classname="card">
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Books B
    </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0"><BooksB /></Accordion.Collapse></Accordion>
    
    <Accordion style={{ width: '80%'}}>
    <Card style={{ width: '80%'}}>
    <Card.Header classname="card">
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Books C
    </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0"><BooksC /></Accordion.Collapse></Accordion>

    <Accordion style={{ width: '80%'}}>
    <Card style={{ width: '80%'}}>
    <Card.Header classname="card">
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Books D
    </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0"><BooksD /></Accordion.Collapse></Accordion>

    <Accordion style={{ width: '80%'}}>
    <Card style={{ width: '80%'}}>
    <Card.Header classname="card">
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Books E
    </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0"><BooksE /></Accordion.Collapse></Accordion>

    <Accordion style={{ width: '80%'}}>
    <Card style={{ width: '80%'}}>
    <Card.Header classname="card">
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Books F
    </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0"><BooksF /></Accordion.Collapse></Accordion>

    <Accordion style={{ width: '80%'}}>
    <Card style={{ width: '80%'}}>
    <Card.Header classname="card">
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Books G-H
    </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0"><BooksGH /></Accordion.Collapse></Accordion>

    <Accordion style={{ width: '80%'}}>
    <Card style={{ width: '80%'}}>
    <Card.Header classname="card">
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Books I-L
    </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0"><BooksI /></Accordion.Collapse></Accordion>

    <Accordion style={{ width: '80%'}}>
    <Card style={{ width: '80%'}}>
    <Card.Header classname="card">
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Books M
    </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0"><BooksM /></Accordion.Collapse></Accordion>

    <Accordion style={{ width: '80%'}}>
    <Card style={{ width: '80%'}}>
    <Card.Header classname="card">
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Books N-O
    </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0"><BooksNO /></Accordion.Collapse></Accordion>

    <Accordion style={{ width: '80%'}}>
    <Card style={{ width: '80%'}}>
    <Card.Header classname="card">
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Books P-R
    </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0"><BooksP /></Accordion.Collapse></Accordion>

    <Accordion style={{ width: '80%'}}>
    <Card style={{ width: '80%'}}>
    <Card.Header classname="card">
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Books S
    </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0"><BooksS /></Accordion.Collapse></Accordion>

    <Accordion style={{ width: '80%'}}>
    <Card style={{ width: '80%'}}>
    <Card.Header classname="card">
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Books T-V
    </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0"><BooksT /></Accordion.Collapse></Accordion>

    <Accordion style={{ width: '80%'}}>
    <Card style={{ width: '80%'}}>
    <Card.Header classname="card">
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Books W-Z
    </Accordion.Toggle>
    </Card.Header></Card>
    <Accordion.Collapse eventKey="0"><BooksW /></Accordion.Collapse></Accordion>
    </div>
   </div>

    );
}
}

export default deptLib;