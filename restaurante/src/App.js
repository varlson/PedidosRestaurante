import React from 'react';
import './App.css';
import Home from './pages/home';



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
              <Home></Home>
          </div>  

        );
    }
}

export default App;