import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
class booksB extends React.Component {
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
               <div>
               <div>
                    {
                    this.state.BooksB &&
                    this.state.BooksB.map( BooksB => {
                        return(
                            <div >
                            <Accordion style={{ width: '100%'}}>
                            <Card style={{width: '80%'}}>
                                <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              {BooksB.bname}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body >
              <Card style={{ width: '100%' }}>
            <ListGroup className="listgrp">
                        <ListGroupItem>Acc No:{BooksB.accno}</ListGroupItem>
            <ListGroupItem>Author: {BooksB.author}</ListGroupItem>
            <ListGroupItem>Publications: {BooksB.publications}</ListGroupItem>
            </ListGroup>
            </Card>
              </Card.Body>
            </Accordion.Collapse>
            </Card></Accordion>
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

export default booksB