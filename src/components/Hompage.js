import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link ,Redirect } from "react-router-dom";
import {KEY_LOCALSTORAGE} from '../actions/typeActions';
const Homepage = () => {
    const btn_logout=()=>{
        let email=data.email;
        let password=data.password;
        let checked=false;
        localStorage.setItem(KEY_LOCALSTORAGE,JSON.stringify({"email":email,"password":password,"checked":checked}))
        window.location.reload();
    }
    const checkdata=()=>{
        console.log(data);
    } 
    var data =JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
  
    if(data){
      if(data.checked===false){
        return (
                <div className="center" style={{ marginTop: '50px' }}>
                    <Link to="/login"><Button variant="danger" className="mr-2" >Login</Button></Link>
                    <Link to="/signup"> <Button variant="warning" className="ml-2">Sign Up </Button></Link>
                    <Button variant="primary" className="ml-2" onClick={checkdata} >Check LocalStorage</Button>
                </div>
       
        )
       }
    }
    return(
        <div className="center" style={{ marginTop: '50px' }}>
                  
                    <Button variant="primary" className="ml-2" onClick={btn_logout}>Logout</Button>
                    <Button variant="primary" className="ml-2" onClick={checkdata} >Check LocalStorage</Button>
                </div>
      )
    
}

export default Homepage;