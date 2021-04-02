import React from 'react';
import { TableCell, TableRow }  from '@material-ui/core';

class HomeComponent extends React.Component {

    render() {
      return(
        
          <TableRow key ={this.props.received.id}>
            <TableCell  component="th" scope="row" className="">
            {this.props.received.id} 
            </TableCell>          
              <TableCell>{this.props.received.nameClient}</TableCell> 
              <TableCell>{this.props.received.dish}</TableCell> 
              <TableCell>{this.props.received.quantityDish}</TableCell> 
              <TableCell>{this.props.received.drink}</TableCell>     
              <TableCell>{this.props.received.quantityDrink}</TableCell> 
              <TableCell>{this.props.received.tableClient}</TableCell> 
              <TableCell>{String(this.props.received.doneDish)==='true'? "Sim" : "Não"}</TableCell> 
              <TableCell>{String(this.props.received.doneDrink)==='true'? "Sim" : "Não"}</TableCell>  
            </TableRow>
            
      )
    }
  }
  export default HomeComponent;



  