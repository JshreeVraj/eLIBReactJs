import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
class booksM extends React.Component {
    state = { 
        BooksM: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksM')
        .get()
        .then( snapshot => {
            const BooksM =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksM.push(data)
            })
            this.setState({ BooksM: BooksM})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div>
               <div >
                    {
                    this.state.BooksM &&
                    this.state.BooksM.map( BooksM => {
                        return(
                            <div >
                            <Accordion >
                            <Card style={{width: '80%'}}>
                                <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              {BooksM.bname}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body >
              <Card style={{ width: '100%' }}>
            <ListGroup className="listgrp">
                        <ListGroupItem>Acc No:{BooksM.accno}</ListGroupItem>
            <ListGroupItem>Author: {BooksM.author}</ListGroupItem>
            <ListGroupItem>Publications: {BooksM.publications}</ListGroupItem>
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

export default booksM