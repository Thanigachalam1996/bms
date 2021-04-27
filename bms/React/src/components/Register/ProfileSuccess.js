import React,{ Component } from "react";
import classes from './Success.css';
import {NavLink} from 'react-router-dom';

class ProfileSuccess extends Component{
    render(){
    return( 
        <div className="Success1" >
         Customer details updated successfully
         <p className="p">Go to dashboard page <NavLink to="/dashboard">click here</NavLink></p>
         
        </div>
    
    )
    }
}

export default ProfileSuccess;