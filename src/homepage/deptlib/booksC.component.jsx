import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
class booksC extends React.Component {
    state = { 
        BooksA: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksC')
        .get()
        .then( snapshot => {
            const BooksC =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksC.push(data)
            })
            this.setState({ BooksC: BooksC})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div>
               <div>
                    {
                    this.state.BooksC &&
                    this.state.BooksC.map( BooksC => {
                        return(
                            <div>
                            <Accordion style={{ width: '100%'}}>
                            <Card style={{width: '80%'}}>
                                <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              {BooksC.bname}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body >
              <Card style={{ width: '100%' }}>
            <ListGroup className="listgrp">
                        <ListGroupItem>Acc No:{BooksC.accno}</ListGroupItem>
            <ListGroupItem>Author: {BooksC.author}</ListGroupItem>
            <ListGroupItem>Publications: {BooksC.publications}</ListGroupItem>
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

export default booksC