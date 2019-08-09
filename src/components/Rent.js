import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


class Rent extends Component{


state = {
    loading:true,
    house:null,
};

    async componentDidMount(){
    const url = "http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=<ZWSID>&state=ny&city=bayside&childtype=zipcode";
    const response = await fetch(url); 
    const data = await response.json(); 
    this.setState({house:data.results[0]})
    console.log(data.results[0]);

}

                
    render(){
        return(
            <div>
                
                
                {/* <CardDeck>
  <Card className= "listing">
    <Card.Img variant="top" src="house.jpeg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a 3 br 3 bath.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className= "listing">
    <Card.Img variant="top" src="house.jpeg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      This is a 3 br 3 bath.

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className= "listing">
    <Card.Img variant="top" src="house.jpeg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck> */}
            </div>
        )
    }
}


export default Rent;