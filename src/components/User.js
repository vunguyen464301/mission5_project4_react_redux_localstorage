import React from 'react';
import {Redirect} from 'react-router-dom'
import {KEY_LOCALSTORAGE} from '../actions/typeActions';
const User =()=>{
    //
    var data =JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
    if(data){
        if(data.checked===true){
          return (
            <div className="center mt-5">
            <h1> User</h1>
       </div>      
          )
         }
      }
        return(
            <Redirect to="/login"/>
           )
        }
export default User;