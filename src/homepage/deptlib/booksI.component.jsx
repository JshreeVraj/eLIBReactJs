import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
class booksI extends React.Component {
    state = { 
        BooksI: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksI')
        .get()
        .then( snapshot => {
            const BooksI =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksI.push(data)
            })
            this.setState({ BooksI: BooksI})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div>
               <div>
                    {
                    this.state.BooksI &&
                    this.state.BooksI.map( BooksI => {
                        return(
                            <div>
                            <Accordion >
                            <Card style={{width: '80%'}}>
                                <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              {BooksI.bname}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body >
              <Card style={{ width: '100%' }}>
            <ListGroup className="listgrp">
                        <ListGroupItem>Acc No:{BooksI.accno}</ListGroupItem>
            <ListGroupItem>Author: {BooksI.author}</ListGroupItem>
            <ListGroupItem>Publications: {BooksI.publications}</ListGroupItem>
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

export default booksI