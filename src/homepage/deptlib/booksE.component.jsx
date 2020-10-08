import React , { Component} from 'react'
import {db, auth} from '../../services/firebase'
import './DeptLib.styles.scss'
import {ListGroup, ListGroupItem, Accordion, Card, Button} from 'react-bootstrap';
class BooksE extends React.Component {
    state = { 
        BooksE: null
    }
    componentDidMount(){
        console.log('mounted')
        db.collection('BooksE')
        .get()
        .then( snapshot => {
            const BooksE =[]
            snapshot.forEach( doc =>{
                const data = doc.data()
                BooksE.push(data)
            })
            this.setState({ BooksE: BooksE})
            console.log(snapshot)
        })
        .catch( error => console.log(error))
    }

    render(){
        return( <div>
               <div>
               <div>
                    {
                    this.state.BooksE &&
                    this.state.BooksE.map( BooksE => {
                        return(
                            <div >
                            <Accordion >
                            <Card style={{width: '80%'}}>
                                <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              {BooksE.bname}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body >
              <Card style={{ width: '100%' }}>
            <ListGroup className="listgrp">
                        <ListGroupItem>Acc No:{BooksE.accno}</ListGroupItem>
            <ListGroupItem>Author: {BooksE.author}</ListGroupItem>
            <ListGroupItem>Publications: {BooksE.publications}</ListGroupItem>
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

export default BooksE