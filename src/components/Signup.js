import React from 'react';
import {Form,Button,Card,Alert} from 'react-bootstrap';
import*as Action from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Btn_signup from './Btn_signup';
import { Redirect } from 'react-router';
// import {KEY_LOCALSTORAGE} from '../utils/index';

import {KEY_LOCALSTORAGE} from '../actions/typeActions';

class Signup extends React.Component{
    state={
        email:'',
        password:'',
        checked:false
    }
    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(this.state));
        // localStorage.setItem(KEY_LOCALSTORAGE, JSON.parse(this.state));
        console.log(localStorage.getItem(KEY_LOCALSTORAGE))
        alert("Signup Successful")
    }
    loadpage=()=>{
      var data =JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
      if(data){
        if(data.checked===true){
          return(
            <div>
              <Redirect to='/user'/>
              </div>
          )
        }
      }
      return(
<Card style={{ width: '18rem' }}>
              <Card.Body>
            <Card.Title>Sign Up</Card.Title>         
            <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            name="email"
             onChange={this.handleInputChange} 
            required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        
          <Form.Group >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
              name="password"
              onChange={this.handleInputChange}
              required
            />
          </Form.Group>
    {/* <Btn_signup/> */}
    <Button variant="primary" type="submit" className="float-right">
        Sign Up
      </Button>

        </Form>
          </Card.Body>
        </Card>
    
      )
    }
    render(){
        return(
            <div className="center mt-5"> 
            {this.loadpage()}
        </div>

        )
    
    }

}
export default Signup