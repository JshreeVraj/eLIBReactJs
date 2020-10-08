import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
class booksP extends React.Component {
    state = { 
        BooksP: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksP')
        .get()
        .then( snapshot => {
            const BooksP =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksP.push(data)
            })
            this.setState({ BooksP: BooksP})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div>
               <div>
                    {
                    this.state.BooksP &&
                    this.state.BooksP.map( BooksP => {
                        return(
                            <div>
                            <Accordion style={{ width: '100%'}}>
                            <Card style={{width: '80%'}}>
                                <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              {BooksP.bname}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body >
              <Card style={{ width: '100%' }}>
            <ListGroup className="listgrp">
                        <ListGroupItem>Acc No:{BooksP.accno}</ListGroupItem>
            <ListGroupItem>Author: {BooksP.author}</ListGroupItem>
            <ListGroupItem>Publications: {BooksP.publications}</ListGroupItem>
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

export default booksP