import React, {Component}  from 'react';
import neighbor from '../Neighbors.png';
import Navbar from './nav';
import h1 from '../h1.jpeg';



class Home extends Component{
    
    render(){
        return(
          <div>Home Page
          <img src={h1} alt="house"/>
          </div>

        )};
}

export default Home;