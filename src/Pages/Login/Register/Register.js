import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';

const Register = () => {

    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = ()=>{
        navigate('/login');
    }

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // createUserWithEmailAndPassword(email,password);
    }


    return (
        <div className='register-form'>
            <h2 className='reg'>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <p className=''>ALready have an account?<br></br> <Link
                to="/login" onClick={navigateLogin} className='text-danger text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;