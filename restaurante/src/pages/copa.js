import React from 'react'
import CopaComponent from '../components/CopaComponent'
import { Table, TableRow, TableBody, TableCell, TableContainer, Paper, TableHead } from '@material-ui/core';

export default class Copa extends React.Component {
  constructor(children) {
    super(children);

    this.state = {
      orders: [],
      isLoading: true,
    };
  }

 
  render() {
    const { isLoading, orders, error} = this.state;
    return (
    <div>
      <h1>Copa</h1>
      <TableContainer component={Paper}>
      {error ? <p>{error.message}</p> : 
        <Table>
          <TableHead>
            <TableRow>   
              <TableCell>Bebida</TableCell>
              <TableCell>Quantidade</TableCell>                
              <TableCell>Mesa</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Bebida/feita</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isLoading ? (
                
              orders.map(order => {
                return (
                  <CopaComponent key = {order.id} received={order} ></CopaComponent>
                ); 
              })
            ) : (
              <TableRow>
              <TableCell>Carregando ... </TableCell>
              </TableRow>
            )}
          </TableBody>  
        </Table>
      }
      </TableContainer>
    </div>  
    );
  }
}