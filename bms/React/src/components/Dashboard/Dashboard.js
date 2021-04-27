import React, { useState } from 'react';
import { Form, Button, Row ,Col} from 'react-bootstrap';
import EducationLoan from './EducationLoan';
import HomeLoan from './HomeLoan';
//import classes from './Dashboard.css';
import Modal from 'react-modal';

const Dashboard = (props) => {
    const [state, setState] = useState({
        username: '',
        email: '',
        city: '',
        phone: ''
      });

      const [editProfile,setEditProfile] = useState(false);
      const [showLoanType,setShowLoanType] = useState({
        showEduLoan : false,
        showHomeLoan : false
      });


      const [modalIsOpen,setModalIsOpen] = useState(false);
      
      const [loanType, setLoanType] = useState(["Select" ,"Education Loan" , "Home loan"]);


      const LoanType = loanType.map(LoanType => LoanType)

        const handleLoanTypeChange = (e) => {
           console.log(e.target.value);
             const {value } = e.target;

             switch (value){
              case ("0"):
                setShowLoanType({
                  showHomeLoan : false,
                  showEduLoan : false
                 })  
              break;
              case ("1"):
                  setShowLoanType({
                    showHomeLoan : false,
                    showEduLoan : true
                   })  
              break;
              case ("2"):
                setShowLoanType({
                  showHomeLoan : true,
                  showEduLoan : false
                 }) 
              default:
              return null; 
               }
        };

        const handleOnSubmit = (event) => {
        event.preventDefault();
        props.history.push({
          pathname: '/dashboard'           
        });
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

      const openModal = () => {
          setModalIsOpen(true);
      }
    
      const { showEduLoan , showHomeLoan} = showLoanType;

// const handleRegister = () =>{
//   setEditProfile(true);

//   props.history.push({
//     pathname: '/register',
//     editProfile
//   });

 
//   }

   
    return(
        <div>
            <h1>Dashboard</h1>
            {/* <button style={{float:"right"}}  onClick={handleRegister} >profile edit</button> */}
        
            <Form className="register-form" onSubmit={handleOnSubmit}>    
        <Row>
        
        <Form.Group as={Col} controlId="loantype">
          <Form.Label>LoanType</Form.Label>
          <Form.Control as="select"
            onChange={handleLoanTypeChange}
          >
          {
        LoanType.map((address, key) => <option value={key}>{address}</option>)
      }
      </Form.Control>
        </Form.Group>
        
        <Form.Group as={Col} controlId="loanamount">
          <Form.Label>LoanAmount</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter loan amount"
            name="loanamount"
            onChange={handleInputChange}
          />
        </Form.Group>
               
        <Form.Group controlId="loanapplydate" as={Col}>
          <Form.Label>LoanApplyDate</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Loan Apply Date"
            name="loanapplydate"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        </Row>
        
        <Row>
                 
        <Form.Group as={Col} controlId="loanissuedate">
          <Form.Label>LoanIssueDate</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Loan Issue Date"
            name="loanissuedate"
            onChange={handleInputChange}
          />
        </Form.Group>
               
        <Form.Group controlId="rateofinterest" as={Col}>
          <Form.Label>RateofInterest</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Rate of Interest"
            name="rateofinterest"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="loanduration" as={Col}>
          <Form.Label>LoanDuration</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Duration of Loan"
            name="loanduration"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        </Row>
      
      </Form>
      
        {showEduLoan  && <EducationLoan modalStatus={openModal}/>}
        {showHomeLoan && <HomeLoan/>}
      
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(!modalIsOpen)}>
          <button onClick={() => setModalIsOpen(!modalIsOpen)} >close</button>
          <div>Your applicaltion has been processed successfully!!</div>
        </Modal>

        </div>
    )

    
}

export default Dashboard;
