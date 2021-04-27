import React, { useState } from 'react';
import { Form, Button, Row ,Col} from 'react-bootstrap';
//import classes from './Dashboard.css';

const Homeloan = props => {
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
    
      return (
        <div>
      <h1>Home Loan</h1>
      <Form className="register-form" onSubmit={handleOnSubmit}>
          <Form.Row>
        
        <Form.Group as={Col} controlId="annualincome">
          <Form.Label>AnnualIncome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Annual Income"
            name="annualincome"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        <Form.Group as={Col} controlId="companyname">
          <Form.Label>CompanyName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Company Name"
            name="companyname"
            onChange={handleInputChange}
          />
        </Form.Group>
               
      
        
        </Form.Row>

        <Form.Row>
        
        <Form.Group as={Col} controlId="designation">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Designation"
            name="designation"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        <Form.Group as={Col} controlId="totalexperience">
          <Form.Label>TotalExperience</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Total Experience"
            name="totalexperience"
            onChange={handleInputChange}
          />
        </Form.Group>
               
        <Form.Group as={Col} controlId="currentcompanyexp">
          <Form.Label>CurrentCompanyExperience</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Current Company Experience"
            name="currentcompanyexp"
            onChange={handleInputChange}
          />
       </Form.Group>
        
        </Form.Row>
        
        
        <Button variant="primary" type="submit">
          Apply Loan
        </Button>
      </Form>
    </div>
        
      );
}

export default Homeloan;