import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <Link to="/home"><li>Home</li></Link>
                <Link to="/Rent"><li>Rent</li></Link>
                <Link to="/Buy"><li>Buy</li></Link>
                <Link to="/Sell"><li>Sell</li></Link>
                <Link to="/Contact"><li>Contact Us</li></Link>
              </ul>
            </div>
        );
    }
}


export default Navbar;
