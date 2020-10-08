import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
class booksS extends React.Component {
    state = { 
        BooksS: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksS')
        .get()
        .then( snapshot => {
            const BooksS =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksS.push(data)
            })
            this.setState({ BooksS: BooksS})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div>
               <div >
                    {
                    this.state.BooksS &&
                    this.state.BooksS.map( BooksS => {
                        return(
                            <div >
                            <Accordion style={{ width: '100%'}}>
                            <Card style={{width: '80%'}}>
                                <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              {BooksS.bname}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body >
              <Card style={{ width: '100%' }}>
            <ListGroup className="listgrp">
                        <ListGroupItem>Acc No:{BooksS.accno}</ListGroupItem>
            <ListGroupItem>Author: {BooksS.author}</ListGroupItem>
            <ListGroupItem>Publications: {BooksS.publications}</ListGroupItem>
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

export default booksS