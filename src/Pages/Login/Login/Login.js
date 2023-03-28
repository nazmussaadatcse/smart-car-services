import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    
    const handleSubmit = e =>{
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password);
    }

    const navigateRegister = e =>{
        navigate('/register');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-left'>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted text-left">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 text-left" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 text-left" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className=''>New To Smart Car?<br></br> <Link 
             to="/register" onClick={navigateRegister} className='text-danger text-decoration-none'>Please Register</Link></p>
        </div>
    );
};

export default Login;