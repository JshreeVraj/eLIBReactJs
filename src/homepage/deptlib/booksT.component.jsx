import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
class booksT extends React.Component {
    state = { 
        BooksT: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksT')
        .get()
        .then( snapshot => {
            const BooksT =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksT.push(data)
            })
            this.setState({ BooksT: BooksT})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div>
               <div >
                    {
                    this.state.BooksT &&
                    this.state.BooksT.map( BooksT => {
                        return(
                            <div >
                            <Accordion style={{ width: '100%'}}>
                            <Card style={{width: '80%'}}>
                                <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              {BooksT.bname}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body >
              <Card style={{ width: '100%' }}>
            <ListGroup className="listgrp">
                        <ListGroupItem>Acc No:{BooksT.accno}</ListGroupItem>
            <ListGroupItem>Author: {BooksT.author}</ListGroupItem>
            <ListGroupItem>Publications: {BooksT.publications}</ListGroupItem>
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

export default booksT