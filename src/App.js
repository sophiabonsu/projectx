import React from 'react';
import './App.css';
import neighbor from './Neighbors.png';
import house from './house.jpeg';
import Routes from './Routes'; 
import { Navbar } from './components';
// import SearchField from "react-search-field";


// import Rent from './components/Rent';
// import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';



class App extends React.Component{
  handleSubmitClick = () => {
    const name = this._name.value;
    console.log(name);
  }
  
  render(){
  return (<div>

    <div  className="navbarcon">
    <img className="logo" src={neighbor} alt="Logo" />
    
      {/* <SearchField
  placeholder="Search..."
  onChange={onChange}
  searchText="This is initial search text"
  classNames="test-class"
/> */}
    <Navbar/>
      <Routes/>

      <input type ="text" ref={input => this._name = input}/>
      <button onClick={this.handleSubmitClick}>Search</button>


      </div>
      <header className="App-header">  
        <p>
          Neighbor's Listings
        </p>
        <h1>Rent</h1>
        <ul className ="house">
          <li><img className="logo" src={house} alt="Logo" /></li>
          <li><img className="logo" src={house} alt="Logo" /></li>
          <li><img className="logo" src={house} alt="Logo" /></li>
          <li><img className="logo" src={house} alt="Logo" /></li>

        </ul>
        
        <h1>Buy</h1>
        <ul className ="house">
          <li><img className="logo" src={house} alt="Logo" /></li>
          <li><img className="logo" src={house} alt="Logo" /></li>
          <li><img className="logo" src={house} alt="Logo" /></li>
          <li><img className="logo" src={house} alt="Logo" /></li>

        </ul>
        <h1>Sell</h1>
        <ul className ="house">
          <li><img className="logo" src={house} alt="Logo" /></li>
          <li><img className="logo" src={house} alt="Logo" /></li>
          <li><img className="logo" src={house} alt="Logo" /></li>
          <li><img className="logo" src={house} alt="Logo" /></li>

        </ul>
        <h1>Contact</h1>
        

      </header>
  </div>
  );
}
}


export default App;
