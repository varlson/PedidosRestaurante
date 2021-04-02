import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
class CopaComponent extends React.Component {
  
  render() {
    const { value } = this.props;
    if (value !== undefined) {
      console.log(value);
    }

    return (
      <TableRow key ={this.props.received.id}>
          <TableCell>{this.props.received.drink}</TableCell>   
          <TableCell>{this.props.received.quantityDrink}</TableCell>            
          <TableCell>{this.props.received.tableClient}</TableCell> 
          <TableCell>{this.props.received.nameClient}</TableCell>             
          <TableCell>{String(this.props.received.doneDrink)==='true'? "Sim" : "Não"}</TableCell>  
      </TableRow>
    );
  }
}
export default CopaComponent;