import React from 'react'
import HomeComponent from '../components/HomeComponent.js'
import { Table, TableHead, Paper, TableContainer, TableBody, TableCell, TableRow } from '@material-ui/core'

export default class Home extends React.Component {
      constructor(param) {
        super(param);
    
        this.state = {
          orders: [],
          isLoading: true,
        };
      }

      componentDidMount() {
        this.orders = ["chuuuuuu", "chaaaaaa", "tchaaaa"]
      }
     
      render() {
        const { isLoading, orders, error } = this.state;
        return (
        <div>
          <h1>Pedidos</h1>
          <TableContainer component={Paper}>
          {error ? <p>{error.message}</p> : 
            <Table>
              <TableHead>
                <TableRow>   
                  <TableCell>ID </TableCell>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Prato</TableCell>
                  <TableCell>Quantidade</TableCell>
                  <TableCell>Bebida</TableCell>
                  <TableCell>Quantidade</TableCell>
                  <TableCell>Mesa</TableCell>
                  <TableCell>Prato/feito</TableCell>
                  <TableCell>Bebida/feita</TableCell>    
                </TableRow>
              </TableHead>
              <TableBody>
                {!isLoading ? (
                    
                  orders.map(order => {            
                    return (
                      <HomeComponent key = {order.id} received={order} ></HomeComponent>
                    ); 
                  })
                
                ) : (
                  <TableRow>
                  <TableCell>Carregando... </TableCell>
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