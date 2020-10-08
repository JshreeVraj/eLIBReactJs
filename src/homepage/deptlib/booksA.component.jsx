import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
class booksA extends React.Component {
    state = { 
        BooksA: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksA')
        .get()
        .then( snapshot => {
            const BooksA =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksA.push(data)
            })
            this.setState({ BooksA: BooksA})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div>
               <div>
                    {
                    this.state.BooksA &&
                    this.state.BooksA.map( BooksA => {
                        return(
                            <div>
                            <Accordion style={{ width: '100%'}}>
                            <Card style={{ width: '80%'}}>
                                <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              {BooksA.bname}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body >
              <Card style={{ width: '100%'}}>
            <ListGroup className="listgrp">
                        <ListGroupItem>Acc No:{BooksA.accno}</ListGroupItem>
            <ListGroupItem>Author: {BooksA.author}</ListGroupItem>
            <ListGroupItem>Publications: {BooksA.publications}</ListGroupItem>
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

export default booksA