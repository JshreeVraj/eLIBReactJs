import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
class BooksGH extends React.Component {
    state = { 
        BooksGH: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksGH')
        .get()
        .then( snapshot => {
            const BooksGH =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksGH.push(data)
            })
            this.setState({ BooksGH: BooksGH})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div>
               <div>
                    {
                    this.state.BooksGH &&
                    this.state.BooksGH.map( BooksGH => {
                        return(
                            <div >
                            <Accordion >
                            <Card style={{width: '80%'}}>
                                <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              {BooksGH.bname}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body >
              <Card style={{ width: '100%' }}>
            <ListGroup className="listgrp">
                        <ListGroupItem>Acc No:{BooksGH.accno}</ListGroupItem>
            <ListGroupItem>Author: {BooksGH.author}</ListGroupItem>
            <ListGroupItem>Publications: {BooksGH.publications}</ListGroupItem>
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

export default BooksGH