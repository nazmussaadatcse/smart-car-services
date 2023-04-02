import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if(user){
        navigate(from,{replace:true});
    }

     // catch error 
     if (error) {

        errorElement = <p className='text-danger'>Error: {error?.message}</p>

    }


    const handleSubmit = e =>{
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }


    const navigateRegister = e =>{
        navigate('/register');
    }

    const resetPassword= async()=>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent Reset Email');

    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-left'>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 text-left" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary w-50" type="submit">
                    Login
                </Button>
            </Form>
            {/* show error  */}
            {errorElement}

            <p>New To Smart Car?<br></br> <Link 
             to="/register" onClick={navigateRegister} className='text-primary text-decoration-none'>Please Register</Link></p>

            <p>Forget Password?<br></br> <Link 
             to="/register" onClick={resetPassword} className='text-primary text-decoration-none'>Reset</Link></p>
             
             <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;