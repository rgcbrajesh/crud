import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Add() {

  const [validated, setValidated] = useState(false);

  let history = useNavigate();
  const [inputData, setInputData] = useState({ Name:"",MobileNumber:"",FatherName:"",BirthDate:"",Gender:"" })

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    event.preventDefault();
    axios.post('https://apigenerator.dronahq.com/api/G_vLg64i/Student', inputData)
      .then(res => {
        alert("data added");
        history('/show');
      }).catch(err => console.log(err))

  };

  return (
    <Form noValidate validated={validated} >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
           
            onChange={e => setInputData({ ...inputData, Name: e.target.value })}
           
          />
          <Form.Control.Feedback>Valid</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Mobile Number"
          
            onChange={e => setInputData({ ...inputData, MobileNumber: e.target.value })}
          />
          <Form.Control.Feedback>Valid</Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Father Name</Form.Label>
          <Form.Control type="text" onChange={e => setInputData({ ...inputData, FatherName: e.target.value })} placeholder="Father Name" required />
          <Form.Control.Feedback type="invalid">
            Please Enter Father Name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control type="date" onChange={e => setInputData({ ...inputData, BirthDate: e.target.value })} placeholder="Father Name" required />
          <Form.Control.Feedback type="invalid">
            Please Enter date of birth
          </Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Gender</Form.Label><br />
          <select onChange={e => setInputData({ ...inputData, Gender: e.target.value })} >
            <option ></option>
            <option value="Male" >Male</option>
            <option value="Female" >Female</option>
          </select>
        </Form.Group>

      </Row>

      <Button type="submit" onClick={handleSubmit}>Submit </Button>
    </Form>
  );
}

export default Add;