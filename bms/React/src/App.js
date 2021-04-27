import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'; 
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './UI/Header';
import Footer from './UI/Footer';
import {AuthProvider} from './containers/AuthProvider';
import Profile from './components/Register/Profile';
import Success from './components/Register/LoginSuccess';
import ProfileSuccess from './components/Register/ProfileSuccess';
import RegisterSuccess from './components/Register/RegisterSuccess';
const App = props =>  {
  
  return (
    <AuthProvider>
     <Router forceRefresh={true}>
     <Header/>
     <div className="container">
       <Switch>
         <Route component={Login} path="/login" exact={true} />
         <Route component={Register} path="/register" />
         <Route component={Dashboard} path="/dashboard" />
         <Route component={Profile} path="/profile" />
         <Route component={Success} path="/loginsuccess" />
         <Route component={RegisterSuccess} path="/registersuccess" />
         <Route component={ProfileSuccess} path="/profilesuccess" />
       </Switch>
     </div>
     <Footer/>
   </Router>
   </AuthProvider>
  );
}

export default App;
