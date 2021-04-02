import React from 'react';
import './App.css';
import Home from './pages/home';
import Garcom from './pages/garcom';
import Cozinha from './pages/cozinha'


class App extends React.Component {
    
    constructor(param){ 
        super(param)
        console.log("criando classe app")
        // this.items = [
        //     { to: '/', label:'Home'}
        // ];
    }
    render(){
        return(
            <div className='app'>
              <Home>

              </Home>
              <Garcom>

              </Garcom>
              <Cozinha>

              </Cozinha>
          </div>  

        );
    }
}

export default App;