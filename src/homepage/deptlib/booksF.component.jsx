import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
class BooksF extends React.Component {
    state = { 
        BooksF: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksF')
        .get()
        .then( snapshot => {
            const BooksF =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksF.push(data)
            })
            this.setState({ BooksF: BooksF})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div>
               <div>
                    {
                    this.state.BooksF &&
                    this.state.BooksF.map( BooksF => {
                        return(
                            <div>
                            <Accordion >
                            <Card style={{width: '80%'}}>
                                <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              {BooksF.bname}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body >
              <Card style={{ width: '100%' }}>
            <ListGroup className="listgrp">
                        <ListGroupItem>Acc No:{BooksF.accno}</ListGroupItem>
            <ListGroupItem>Author: {BooksF.author}</ListGroupItem>
            <ListGroupItem>Publications: {BooksF.publications}</ListGroupItem>
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

export default BooksF