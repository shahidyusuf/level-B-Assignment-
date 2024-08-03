import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { Form, Row, Col } from 'react-bootstrap';
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";

const Home = () => {

    const [ input, setInput ] = useState({
        fullname:"",
        name:"",
        email:"",
        password:""
    })
    console.log(input);
    

    const getData = (e) => {
        // console.log("e-->", e.target.value);

        const {value, name} = e.target;
        // console.log(value, name);

        setInput (() =>{
            return {
                ...input,
                 [name]: value

            }
        })
        
        
    }
    
            const addData = (e) => {
                e.preventDefault();
                // console.log("input-->", input);
              
                if (!input.fullname ||!input.name ||!input.email ||!input.password) {
                    console.log(input);
                    alert('Please field is Required..!');
                  return;
                }
              
                localStorage.setItem('users', JSON.stringify([...JSON.parse(localStorage.getItem('users') || '[]'), input]));
                alert('Registration successful!');

                window.location.href = '/dashboard';
              }
  return (
    <>
      <div className="container mt-5">
        <section className="d-flex justify-content-between" style={{width:"100%"}}>
          <div className="left_data mt-3 p-3">
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Control  type="text" name="fullname" onChange={getData} placeholder="Enter Full Name" />                
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" >
                <Form.Control type="text" name="name" onChange={getData} placeholder="Enter User Name" />                
              </Form.Group>
              </Row>
              <Row>
              <Form.Group className="mb-3 col-lg-6" >
                <Form.Control type="email" name="email" onChange={getData} placeholder="Enter email" />                
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" >
                <Form.Control type="password" name="password" onChange={getData} placeholder="Password" />
              </Form.Group>
              <Button variant="primary"className="col-lg-12" onClick={addData} style={{background: "rgb(67, 185, 127)"}} type="submit">
                 Submit
              </Button>
        </Row>
            </Form>
            <p className="mt-3">Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span></p>
          </div>
          <Sign_img />
        </section>


      </div>
    </>
  );
};

export default Home;
