import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
class booksNO extends React.Component {
    state = { 
        BooksM: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksNO')
        .get()
        .then( snapshot => {
            const BooksNO =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksNO.push(data)
            })
            this.setState({ BooksNO: BooksNO})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div>
               <div>
                    {
                    this.state.BooksNO &&
                    this.state.BooksNO.map( BooksNO => {
                        return(
                            <div >
                            <Accordion >
                            <Card style={{width: '80%'}}>
                                <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              {BooksNO.bname}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body >
              <Card style={{ width: '100%' }}>
            <ListGroup className="listgrp">
                        <ListGroupItem>Acc No:{BooksNO.accno}</ListGroupItem>
            <ListGroupItem>Author: {BooksNO.author}</ListGroupItem>
            <ListGroupItem>Publications: {BooksNO.publications}</ListGroupItem>
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

export default booksNO