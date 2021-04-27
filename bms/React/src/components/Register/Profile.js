import React, { useState ,useEffect} from 'react';
import { Form, Button, Row ,Col} from 'react-bootstrap';
import classes from './Register.css';
import BMSService from '../../API/BMSService';
import moment from 'moment';
 
import { registerField } from 'redux-form';

const Profile = props => {
const [state, setState] = useState({
  userid: '',
  password: ''
});
       const dateFormat = 'YYYY-MM-DD';
       const dateRange = moment(new Date()).format(dateFormat);
      const minDateRange = (new Date().getFullYear()-18)  + "-" + "0"+(new Date().getMonth()+1) + "-" + new Date().getDate()
      const [stateVal, setStateVal] = useState();
      const [formVal, setFormVal] = useState({});
      const [validated, setValidated] = useState(false);

      const editProfile = props.location.editProfile;

      const registered =  JSON.parse(localStorage.getItem("registeredData"));
     useEffect(()=>{
      if(registered){
       
        console.log(formVal)
        BMSService.executeCustomerGerService(registered)
        .then(res => { 
          res = res['data']
          setFormVal(res)
        })
        .catch(res => console.log(res))
      }
     },[editProfile])
     
      const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      
      event.preventDefault();
      event.stopPropagation();
    
    }
    setValidated(true);
    
          const formData = new FormData(event.target),
                formDataObj = Object.fromEntries(formData.entries())
    if(form.checkValidity() === true){
      if(registered){
        formDataObj['registered'] = registered;
        BMSService.executeProfileService(formDataObj,registered)
        .then(res=> handleSuccess(res))
        .catch(res=> handleError(res)) 
      }
      event.preventDefault();
      event.stopPropagation(); 
     
    }
    
  };
    
  
  const handleSuccess = (data) => {
    
    setValidated(true);
    props.history.push({
            pathname: '/ProfileSuccess'
      });
  };

const handleError = (data) =>{
  
  console.log(data)
  setValidated(false);
  };


  
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormVal((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };
    
      // const onChangeText = (e) =>{
      //   switch (e.target.id) {
      //     case "ID":
      //       if (e.target.value.match(/^[A-Za-z0-9_-]*$/)) setLoginID(e.target.value);
      //       break;
      //     case "password":
      //       if (e.target.value.match(/^[A-Za-z0-9_-]*$/)) setPassWord(e.target.value);
      //       break;
      //     default:
      //       break;
      //   }
      // };
     const handleDate = (e) => {
      // const currentYear = (new Date).getFullYear();
      // const currentMonth = (new Date).getMonth();
      // const currentDay = (new Date).getDate();
      
      // $("#fromdate").datepicker({
      //   minDate: new Date((currentYear - 1), 12, 1),
      //   dateFormat: 'dd/mm/yy',
      //   maxDate: new Date(currentYear, currentMonth, currentDay)
      // });

    //   console.log(e.target.value)
    //   let date = e.target.value;
    //   const dateFormat = 'DD-MM-YYYY';
    //   const toDateFormat = moment(new Date(date)).format(dateFormat);
    //   let a = moment(toDateFormat, dateFormat, true).isValid(); 
    // let b = new Date()

    // let todayDate = moment(new Date()).format(dateFormat);;
    // if(todayDate > toDateFormat){
    //   console.log("w")
    // }
     
      };



     
      return (
        <div>
      <h1>Update Details</h1>
      
      <Form className="register-form" noValidate validated={validated}  onSubmit={handleSubmit}>
          <Form.Row>
        <Form.Group as={Col} controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control value={formVal.name} onChange={handleInputChange}
            type="text"
            placeholder="Enter name" pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
            name="name" required  
            />
              <Form.Control.Feedback type="invalid">
              Please choose a name.
            </Form.Control.Feedback>
        </Form.Group>
              

        
        <Form.Group  as={Col} controlId="guardiantype">
          <Form.Label>GuardianType</Form.Label>
          <Form.Control  value={formVal.guardiantype} onChange={handleInputChange}
            type="text"
            placeholder="Enter GuardianType"
            name="guardiantype"  required
            />
              <Form.Control.Feedback type="invalid">
                Enter the GuardianType
              </Form.Control.Feedback>
              </Form.Group>

          <Form.Group as={Col} controlId="guardianname">
          <Form.Label>GuardianName</Form.Label>
          <Form.Control value={formVal.guardianname} onChange={handleInputChange}
            type="text"
            placeholder="Enter GuardianName"
            name="guardianname" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the GuardianName
              </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control value={formVal.address} onChange={handleInputChange}
            type="textarea"
            placeholder="Enter address"
            name="address" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Address
              </Form.Control.Feedback>
        </Form.Group>
          
        </Form.Row>

        <Form.Row>
        
        
        
              
        <Form.Group as={Col} controlId="citizenship">
          <Form.Label>Citizenship</Form.Label>
          <Form.Control  value={formVal.citizenship} onChange={handleInputChange}
            type="text"
            placeholder="Enter citizenship"
            name="citizenship" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Citizenship
              </Form.Control.Feedback>
        </Form.Group>
        
        
        <Form.Group as={Col} controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control 
            type="text" value={formVal.state} onChange={handleInputChange}
            placeholder="Enter State"
            name="state" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the State
              </Form.Control.Feedback>
        </Form.Group>
         
        
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control value={formVal.email} onChange={handleInputChange}
            type="email"
            placeholder="Enter email"
            name="email" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Email
              </Form.Control.Feedback>  
        </Form.Group>
              
       
        <Form.Group controlId="maritialstatus" as={Col}>
          <Form.Label>Maritial Status</Form.Label>
          <Form.Control value={formVal.maritialstatus} onChange={handleInputChange}
            type="text"
            placeholder="Enter maritialstatus"
            name="maritialstatus" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the maritialstatus
              </Form.Control.Feedback> 
              </Form.Group>
        </Form.Row>
        
        <Form.Row>
        
        <Form.Group as={Col} controlId="contactno">
          <Form.Label>Contact No</Form.Label>
          <Form.Control value={formVal.contactno} onChange={handleInputChange}
          type="text"  pattern= "[0-9]*" maxlength="10"
            placeholder="Enter contact no"  
            name="contactno" required 
            />
              <Form.Control.Feedback type="invalid">
                Enter the contact no
              </Form.Control.Feedback> 
              </Form.Group>
        
        
          <Form.Group as={Col} controlId="branchname">
          <Form.Label>Branchname</Form.Label>
          <Form.Control value={formVal.branchname} onChange={handleInputChange}
            type="text"
            placeholder="Enter branchname"
            name="branchname"  required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Branchname
              </Form.Control.Feedback> 
              </Form.Group> 

              <Form.Group as={Col} controlId="citizenstatus">
          <Form.Label>Citizen Status</Form.Label>
          <Form.Control value={formVal.citizenstatus} onChange={handleInputChange}
            type="text"
            placeholder="Enter Citizen Status"
            name="citizenstatus"  required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Citizen Status
              </Form.Control.Feedback> 
              </Form.Group>

          <Form.Group controlId="prooftype" as={Col}>
          <Form.Label>Proof type</Form.Label>
          <Form.Control value={formVal.prooftype} onChange={handleInputChange}
            type="text"
            placeholder="Enter Proof type"
            name="prooftype" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Proof type
              </Form.Control.Feedback> 
              </Form.Group>
        </Form.Row>   
        
     
        
        <Form.Row>
        
        <Form.Group as={Col} controlId="documentno">
          <Form.Label>Document No</Form.Label>
          <Form.Control value={formVal.documentno} onChange={handleInputChange}
            type="text"
            placeholder="Enter Document No"
            name="documentno" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Document no
              </Form.Control.Feedback> 
              </Form.Group>
        
        <Form.Group as={Col} controlId="refaccountname">
          <Form.Label>Reference Account Name</Form.Label>
          <Form.Control value={formVal.refaccountname} onChange={handleInputChange}
            type="text" pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
            placeholder="Enter Reference Account Name"
            name="refaccountname"  
            />
              <Form.Control.Feedback type="invalid">
                Enter the Reference Account Name
              </Form.Control.Feedback> 
              </Form.Group>
        
          <Form.Group as={Col} controlId="refaccountno">
          <Form.Label>Reference Account No</Form.Label>
          <Form.Control value={formVal.refaccountno} onChange={handleInputChange}
            type="number"
            placeholder="Enter Reference Account No"
            name="refaccountno"  
            />
              <Form.Control.Feedback type="invalid">
                Enter the Reference Account No
              </Form.Control.Feedback> 
              </Form.Group>
              
          
        <Form.Group as={Col} controlId="refaccountaddress">
          <Form.Label>Reference Account Address</Form.Label>
          <Form.Control value={formVal.refaccountaddress} onChange={handleInputChange}
            type="textarea"
            placeholder="Enter Reference Account Address"
            name="refaccountaddress" 
            />
              <Form.Control.Feedback type="invalid">
                Enter the Reference Account Address
              </Form.Control.Feedback> 
              </Form.Group>
              
        </Form.Row>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
        
      );
}

export default Profile;
