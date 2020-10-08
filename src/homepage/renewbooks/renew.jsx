import React, {Component } from 'react';
import Header from '../header/header';
import './renew.scss'
import Table from 'react-bootstrap/Table';
class Renew extends Component{
    render(){
        return(
            <div>
                <Header/>
                <h1 className="h1">Renew</h1>
                <div className="align">
                <Table striped bordered hover variant="dark" className="align" style={{ width: '80%'}}>
  <thead>
    <tr>
      <th>Acc No</th>
      <th>Book Name</th>
      <th>Issue Date</th>
      <th>Return Date</th><th>Renue</th></tr> </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      
</tbody>
</Table>
</div>    </div>
        );
    }
}

export default Renew;