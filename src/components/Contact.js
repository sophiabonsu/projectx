import React,{Component} from 'react';
import h1 from '../h1.jpeg';





class Contact extends Component{
     state = {
         firstName:'Joe',
         lastName:'Doe',
         email:'@@@',
         TypeOfListing:' Rental',
     };
        
     change = e => {
         this.setState({
             [e.target.name]:e.target.value
         });
     }
     onSubmit = () =>{
        //  e.preventDefault();
         console.log(this.state)
     }
        


    render(){;
        return (<div>
            
            <form className="forms" >
                <h1>Please Submit your info below:</h1>
                    <input  type="text"
                    name= "firstName"
                    placeholder='first name' 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                    />
                    <br/>
                    <input 
                    name ="lastName"
                    placeholder='last name' 
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}/>
                    <br/>
                    <input 
                    name="email"
                    placeholder=' email' 
                    value={this.state.email} 
                    onChange={e => this.change(e)}/>
                    <br/>
                    <input 
                    name="TypeOfListing"
                    placeholder='listing description' value={this.state.TypeOfListing} 
                    onChange={e => this.change(e)}/>

                    <button onClick={e => this.onSubmit(e)}>Submit</button>
                    
            </form>
            <div>
                          <img src={h1} alt="house"/>

            </div>
           </div> )
        }
}
    
export default Contact;