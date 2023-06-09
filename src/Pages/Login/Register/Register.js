import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';
import PageTitle from '../../../Shared/PageTitle/PageTitle';

const Register = () => {

    const [agree,setAgree] =  useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const handleRegister = async (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = e.target.terms.checked;
        await createUserWithEmailAndPassword(email,password);
        await updateProfile({ displayName: name});
        alert('Updated profile');
        navigate('/home');

    }

    const navigate = useNavigate();
    const navigateLogin = ()=>{
        navigate('/login');
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    if(user){
        console.log('user', user);
    }

    return (
        <div className='register-form'>
            <h2 className='text-primary text-center'>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree?'mx-1 text-primary': 'mx-1 text-danger'} htmlFor="terms">Accept Terms and Conditions </label> */}
                {/* Conditional css class */}
                <label className={`mx-1 ${agree?'':'text-danger'}`} htmlFor="terms">Accept Terms and Conditions </label>

                <input disabled={!agree} className='w-50 mx-auto btn btn-primary' type="submit" value="Register" />
            </form>
            <p className=''>ALready have an account?<br></br> <Link
                to="/login" onClick={navigateLogin} className='text-primary text-decoration-none'>Please Login</Link></p>
                
                <SocialLogin></SocialLogin>
                <PageTitle title="Register"></PageTitle>
        </div>
    );
};

export default Register;