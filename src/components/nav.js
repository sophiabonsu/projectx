import React, { Component } from 'react';






class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Rent</a></li>
                <li><a href="#">Buy</a></li>
                <li><a href="#">Sell</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
        );
    }
}


export default Navbar;
