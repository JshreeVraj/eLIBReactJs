import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
class booksW extends React.Component {
    state = { 
        BooksW: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksW')
        .get()
        .then( snapshot => {
            const BooksW =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksW.push(data)
            })
            this.setState({ BooksS: BooksW})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div>
               <div >
                    {
                    this.state.BooksW &&
                    this.state.BooksW.map( BooksW => {
                        return(
                            <div >
                            <Accordion style={{ width: '100%'}}>
                            <Card style={{width: '80%'}}>
                                <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              {BooksW.bname}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body >
              <Card style={{ width: '100%' }}>
            <ListGroup className="listgrp">
                        <ListGroupItem>Acc No:{BooksW.accno}</ListGroupItem>
            <ListGroupItem>Author: {BooksW.author}</ListGroupItem>
            <ListGroupItem>Publications: {BooksW.publications}</ListGroupItem>
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

export default booksW