import React,{Component} from 'react';
import './App.css';
import neighbor from './Neighbors.png';
import Navbar from './components/nav';
import Routes from './Routes'; 




 function App() {
  return (<div>
    <div  className="navbarcon">

      
        
    <img className="logo" src={neighbor} alt="Logo" />
    
      <Navbar/>
      <Routes/>
      </div>


      <header className="App-header">
        
        <p>
          Neighborhood Listings
        </p>
      <div>
        <h1>Rent</h1>
        
      </div>
      <div>
        <h1>Buy</h1>
      </div>
      <div>
        <h1>Sell</h1>
      </div>
      <div>Contact Us</div>
      </header>
  </div>
  );
}


export default App;
