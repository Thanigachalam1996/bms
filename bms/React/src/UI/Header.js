import React, { useContext, useState } from 'react';
import {AuthContext} from '../containers/AuthProvider';
import './hf.css';
import { useHistory } from "react-router-dom";

const Header = props => {
  let history = useHistory();
  const headerVal = useContext(AuthContext);
  let isLogged = headerVal.token  ;
  console.log(headerVal)
  const [editProfile,setEditProfile] = useState(false);

  
  const registered =  JSON.parse(localStorage.getItem("registeredData"));

  const handleRegister = () =>{
    setEditProfile(true);
  
     history.push({
      pathname: '/profile',
      editProfile 
    });
     
    }

    const handleLogout = () => {
      
      localStorage.removeItem("registeredData") 
      isLogged =  null
      history.push('/login');
    }

  return (
    <div className="Header">
      BMS 
      { isLogged &&     <div className="headerBtn" >
      <button class="btn btn-primary"  onClick={handleRegister} > Profile Edit</button>
       <button  class="btn btn-danger" onClick={handleLogout} >LogOut</button>
     
      </div>  }
    </div>
  )
}

export default Header;
