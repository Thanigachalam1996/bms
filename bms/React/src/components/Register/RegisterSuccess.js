import React,{ Component } from "react";
import classes from './Success.css';
import {NavLink} from 'react-router-dom';

class RegisterSuccess extends Component{
    render(){
    return( 
        <div className="Success1" >
         Customer details created successfully
         <p className="p">Go to Login page <NavLink to="/login">click here</NavLink></p>
         
        </div>
    
    )
    }
}

export default RegisterSuccess;