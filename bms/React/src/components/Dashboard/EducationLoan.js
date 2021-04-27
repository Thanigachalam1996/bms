import React, { useState } from 'react';
import { Form, Button, Row ,Col} from 'react-bootstrap';
//import classes from './Dashboard.css';


const EducationLoan = (props) => {
    const [state, setState] = useState({
        username: '',
        email: '',
        city: '',
        phone: ''
      });
     
    

        const handleOnSubmit = (event) => {
        event.preventDefault();
            props.modalStatus(event.target.name)
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };
    
    return(
        <div>
            <h1>Education Loan</h1>
            <Form className="register-form" onSubmit={handleOnSubmit}>    
        <Row>
        
        
        <Form.Group as={Col} controlId="coursefee">
          <Form.Label>CourseFee</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Course Fee"
            name="coursefee"
            onChange={handleInputChange}
          />
        </Form.Group>
               
        <Form.Group controlId="course" as={Col}>
          <Form.Label>Course</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Course"
            name="course"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="fathername" as={Col}>
          <Form.Label>Father Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Father Name"
            name="fathername"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="fatheroccupation" as={Col}>
          <Form.Label>Father Occupation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Father Occupation"
            name="fatheroccupation"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        

        
        </Row>
        
        <Row>
                 
        <Form.Group as={Col} controlId="fathertotalexp">
          <Form.Label>Father total Experience</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Father total Experience"
            name="fathertotalexp"
            onChange={handleInputChange}
          />
        </Form.Group>
               
        <Form.Group controlId="fatherexpcurrentcompany" as={Col}>
          <Form.Label>Father Exp in Current Cmpy</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Father Exp in Current Cmpy<"
            name="fatherexpcurrentcompany"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="rationcardno" as={Col}>
          <Form.Label>RationCardNo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Ration Card No"
            name="rationcardno"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="annualincome" as={Col}>
          <Form.Label>Annual Income</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Annual Income"
            name="annualincome"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        </Row>
        
        <Button variant="primary" type="submit" >
          Register
        </Button>
      </Form>

     

        </div>
    )
}

export default EducationLoan;