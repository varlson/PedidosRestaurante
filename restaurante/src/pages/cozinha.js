import React from 'react'
import CozinhaComponent from '../components/CozinhaComponent'
import { Table, TableHead, Paper, TableContainer, TableBody, TableCell, TableRow } from '@material-ui/core'

export default class Cozinha extends React.Component {
      constructor(children) {
        super(children);
    
        this.state = {
          orders: [],
          isLoading: true,
        };
      }
     
      componentDidMount() {
        this.orders = ['o1', 'o2', 'o3']
      }
     
      render() {
        const { isLoading, orders, error} = this.state;
        return (
        <div>
          <h1>Cozinha</h1>
          <TableContainer component={Paper}>
          {error ? <p>{error.message}</p> : 
            <Table>
              <TableHead>
                <TableRow>   
                  <TableCell>Prato</TableCell>
                  <TableCell>Quantidade</TableCell>                
                  <TableCell>Mesa</TableCell>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Prato/feito</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!isLoading ? (
                    
                  orders.map(order => {
                    return (
                      <CozinhaComponent key = {order.id} received={order} ></CozinhaComponent>
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