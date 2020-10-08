import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
class booksD extends React.Component {
    state = { 
        BooksA: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksD')
        .get()
        .then( snapshot => {
            const BooksD =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksD.push(data)
            })
            this.setState({ BooksD: BooksD})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div>
               <div >
                    {
                    this.state.BooksD &&
                    this.state.BooksD.map( BooksD => {
                        return(
                            <div >
                            <Accordion style={{ width: '100%'}}>
                            <Card style={{width: '80%'}}>
                                <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              {BooksD.bname}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <Card style={{ width: '100%' }}>
            <ListGroup className="listgrp">
                        <ListGroupItem>Acc No:{BooksD.accno}</ListGroupItem>
            <ListGroupItem>Author: {BooksD.author}</ListGroupItem>
            <ListGroupItem>Publications: {BooksD.publications}</ListGroupItem>
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

export default booksD