
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import { SiSimplelogin } from "react-icons/si";

import {Link} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {handleError, handleSuccess} from './Util'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
const Login = () => {


    const navigatee = useNavigate();
    const { login } = useAuth();
  
    const handleLogin = () => {
      // Replace this with your actual login logic (e.g., API call)
      login(); // Set user as logged in
      navigatee('/home'); // Redirect to Home page
    };
    const [logininfo, setlogininfo] = useState({
      
        email:'',
        password:''

    });

    
const navigate=useNavigate();
    const handlechange = (e) => {
        // e.preventDefault();
        // Handle signup logic here
        const {name,value}=e.target;
        // console.log(name ,value);
        // const copylogin={...signup};
        // copylogin[name]=value;
        setlogininfo((prev)=>({...prev,[name]:value}));
    };
  






    const handleSubmit = async (e) => {
        e.preventDefault(); // Ensure parentheses are present
        const {  email, password } = logininfo;
    
        if ( !email || !password) {
            return handleError('Name, email, and password are required');
        }
    
        try {
            const url = "http://localhost:9090/auth/login";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(logininfo) // Use lowercase 'body'
            });
    
            const result = await response.json(); // Await JSON parsing
            console.log(result);
    
            const { success,jwtToken,name, message, error } = result || {};
    
            if (success) {
                handleSuccess(message);
                localStorage.setItem('jwtToken',jwtToken);
                localStorage.setItem('loggedInUser',name);
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            } else if (error) {
                // const details = error?.details?.[0]?.message || 'Something went wrong';
                const details=error?.details[0]?.message;
                handleError(details);
            }
            else if(!success)
            {
                handleError(message)
            }

        } catch (err) {
            handleError(err.message || 'An unexpected error occurred');
        }
    };
    

    return (
        <Container className="mt-5 signup">
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="text-center mb-4">
                        {/* <FaSpotify size={50} color="#1DB954" /> */}
                        <h2>login <SiSimplelogin /></h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                       

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                // value={signup.email}
                                // email="email"
                                name='email'
                        
                                autoFocus
                                onChange={handlechange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                // value={signup.password}
                                // password="password"
                                name='password'
                                autoFocus
                                onChange={handlechange}
                                required
                            />
                        </Form.Group>
                            <br />
                        <Button onClick={handleLogin}  className="button "variant="success" type="submit" block>
                            login
                        </Button>
                        <br />
                        <span>
                            don't have an account ? <Link to="/signup">signup</Link>
                        </span>
                    </Form>
                    
                    <ToastContainer />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;