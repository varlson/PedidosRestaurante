import React from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

class GarcomComponent extends React.Component {
  constructor(param){
    super(param);
    
    this.state = {
      nameClient: '',
      dish: '',
      drink: '',
      tableClient: '',
      quantityDrink: '',
      quantityDish: '',
      doneDish: 0,
      doneDrink: 0,
    }
    
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})

  }

  render() {
    const {nameClient, dish, drink, tableClient, quantityDrink, quantityDish } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
        <FormControl>
            <InputLabel>Nome</InputLabel>
            <Input
              type="text"
              value={nameClient}
              onChange={this.changeHandler}
              name="nameClient"
              id="nameClient"
              aria-describedby="helper-nameClient"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Prato</InputLabel>
            <Input
              type="text"
              value={dish}
              onChange={this.changeHandler}
              name="dish"
              id="dish"
              aria-describedby="helper-dish"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Quantidade</InputLabel>
            <Input              
              type="text"
              value={quantityDish}
              onChange={this.changeHandler}
              name="quantityDish"
              id="quantityDish"
              aria-describedby="helper-quantityDish"
            />
          </FormControl>
            <FormControl>
            <InputLabel>Bebida</InputLabel>
            <Input        
              type="text"
              value={drink}
              onChange={this.changeHandler}
              name="drink"
              id="drink"
              aria-describedby="helper-drink"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Quantidade</InputLabel>
            <Input              
              type="text"
              value={quantityDrink}
              onChange={this.changeHandler}
              name="quantityDrink"
              id="quantityDrink"
              aria-describedby="helper-quantityDrink"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Mesa</InputLabel>
            <Input              
              type="text"
              value={tableClient}
              onChange={this.changeHandler}
              name="tableClient"
              id="tableClient"
              aria-describedby="helper-tableClient"
            />
          </FormControl>
          <br></br>
          <br></br>

          <Button type="submit" variant="contained" >
            Enviar
          </Button>
        </form>
      </div>
    );
  }
}

export default GarcomComponent;