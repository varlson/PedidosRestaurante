import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
  

class CozinhaComponent extends React.Component {

  render() {
    const { value } = this.props;
    if (value !== undefined) {
      console.log(value);
    }

    return (
      <TableRow key ={this.props.received.id}>
          <TableCell>{this.props.received.dish}</TableCell>   
          <TableCell>{this.props.received.quantityDish}</TableCell>            
          <TableCell>{this.props.received.tableClient}</TableCell> 
          <TableCell>{this.props.received.nameClient}</TableCell>             
          <TableCell>{String(this.props.received.doneDish)==='true'? "Sim" : "Não"}</TableCell> 
      </TableRow>
    );
  }
}
export default CozinhaComponent;