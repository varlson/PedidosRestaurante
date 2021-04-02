import React from 'react';
import './App.css';



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
                {/* <Router> */}
                  <p>Aoooba</p>
                {/* </Router> */}
          </div>  

        );
    }
}

export default App;