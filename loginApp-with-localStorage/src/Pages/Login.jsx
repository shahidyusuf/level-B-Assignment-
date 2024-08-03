import React,  { useState } from "react";
import Button from "react-bootstrap/Button"
import { Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Signin_img from "../assets/images/signin.webp";
import SigIn_img from "./SigIn_img";
// import signin_img from "";


const Login = () => {
    const history = useNavigate();

    
    const [ input, setInput ] = useState({
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
                const getUserArr = localStorage.getItem("users");
                console.log(getUserArr);
              
                const {email, password} = input;
                if (!input.email ||!input.password) {
                  alert('Please field is Required..!');
                  return;
                }
                

                if(getUserArr && getUserArr.length){
                    const userData = JSON.parse(getUserArr);
                        // console.log(userData);
                        const userlogin = userData.filter((el,k) => {
                            return el.email === email && el.password === password
                        })
                        // console.log(userlogin);

                        if(userlogin.length === 0){
                            alert("Invalid Details..!")
                        }
                        else {
                            console.log("User Login Success Fully..!")

                            localStorage.setItem("user_login", JSON.stringify(userlogin))

                            history("/dashboard")
                        }
                }
              
                // localStorage.setItem('users', JSON.stringify([...JSON.parse(localStorage.getItem('users') || '[]'), input]));
                // alert('Registration successful!');
              }

  return (
    <>
      <div className="container mt-5">
        <section
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <div className="left_data mt-3 p-3">
            <h3 className="text-center col-lg-12 mb-5">Sign In</h3>
            <Form>
            
              <Row>
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={getData}
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6">
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={getData}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="col-lg-12"
                  onClick={addData}
                  style={{ background: "rgb(67, 185, 127)" }}
                  type="submit"
                >
                  Sign In
                </Button>
              </Row>
             </Form>
            <p className="mt-3">
              Already Have an Account <span>SignIn</span>
            </p>
          </div>
          <SigIn_img />
        </section>
      </div>
    </>
  );
};

export default Login;
