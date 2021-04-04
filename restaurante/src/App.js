import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import Home from './pages/home';
import Cozinha from './pages/cozinha';
import Garcom from './pages/garcom';
import Copa from './pages/copa';
import Breadcrumb from './breadcrumb';

class App extends React.Component {
    
    constructor(param){ 
        super(param)
        
        this.items = [
            { to: '/', label:'Home'},
            { to: '/cozinha', label: 'Cozinha'},
            { to: '/garcom', label: 'Garcom'},
            { to: '/copa', label: 'Copa'},
        ];   
    }
    render(){
        return(
            <div className='app'>
                <Breadcrumb>
                {this.items.map(({ to, label }) => (
                    <Link key={to} to={to}>
                      {label}
                    </Link>
                ))}
                </Breadcrumb>
                <Router>
                    <Home path='/'/>
                    <Cozinha path='/cozinha'/>
                    <Garcom path='/garcom'/>
                    <Copa path='/copa'/>
                </Router>
          </div>  

        );
    }
}

export default App;