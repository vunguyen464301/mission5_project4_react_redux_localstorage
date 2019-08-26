import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import {KEY_LOCALSTORAGE} from '../actions/typeActions';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
class Login extends React.Component {
  state = {
    email: '',
    password: '',
    checked: false
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  }
  checkLocalStorage=()=>{
    var data =JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
    if(data.email===this.state.email){
      if(data.password===this.state.password){
        // return(
          localStorage.setItem(KEY_LOCALSTORAGE,JSON.stringify(this.state))
          // console.log(this.state)
        window.location.reload();
        // )
        alert("loggin success !")
      }else{
        alert("Password is wrong !");
      }
    }else{
      alert("Account is not exists !")
    }
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.checked);
    this.checkLocalStorage();
    //    return(<Redirect to="user"/>);
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
        <Card.Title>Login</Card.Title>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
              name='email'
              onChange={this.handleOnChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
              placeholder="Password"
              name='password'
              onChange={this.handleOnChange}
            />
          </Form.Group>
          <Form.Group >
            <Form.Check type="checkbox" label="Save"
              name='checked'
              onChange={this.handleOnChange}
              value={true}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="float-right"
          >
            Login
</Button>
        </Form>
      </Card.Body>
    </Card>
    )

  }

  render() {
   
    return (
      <div className="center mt-5">
        {this.loadpage()}
      </div>
    )
  }
}
export default Login;

