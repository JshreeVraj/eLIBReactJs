import React, {Component } from 'react';
import Header from '../header/header';
import './bookhis.scss'
import Table from 'react-bootstrap/Table';
class bookhis extends Component{
    render(){
        return(
            <div >
                <Header/>
                <h1 className='h1'>Book History</h1>
                <div className="align">
<Table striped bordered hover variant="dark" className="align" style={{ width: '80%'}}>
  <thead>
    <tr>
      <th>Acc No</th>
      <th>Book Name</th>
      <th>Issue Date</th>
      <th>Return Date</th></tr> </thead>
  <tbody>
    <tr>
      <td>D0003</td>
      <td>Data structures and algorithms in C</td>
      <td>16.07.2020</td>
      <td>27.07.2020</td>
      </tr>
      
</tbody>
</Table>
            </div></div>
        );
    }
}

export default bookhis;