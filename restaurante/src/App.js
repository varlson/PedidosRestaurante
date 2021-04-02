import React from 'react';
import './App.css';
import Home from './pages/home';
import Garcom from './pages/garcom';


class App extends React.Component {
    
    constructor(param){ 
        super(param)
        
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
          </div>  

        );
    }
}

export default App;