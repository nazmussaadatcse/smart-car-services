import React from 'react';
import './SocialLogin.css'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;


    // catch error 
    if (error || error1) {

        errorElement = <div>
                <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
            </div>

    }
    if(user || user1){
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='line-color w-50 line-height'></div>
                <p className='mt-2 px-2'>or</p>
                <div className='line-color w-50 line-height'></div>
                
            </div>

            {/* show error for google auth */}
            {errorElement}
            {/* google signin  */}

            <button onClick={()=>signInWithGoogle()} className='btn btn-primary mt-2 d-block mx-auto w-50'>
                <img className='img' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                Google Sign In</button>


            {/* Facebook Signin  */}

            <button className='btn btn-primary mt-2 d-block mx-auto w-50'>
                <img className='img' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png" alt="" />
                Facebook Sign In</button>


                {/* GitHub SignIn  */}

            <button onClick={()=>signInWithGithub()} className='btn btn-primary mt-2 d-block mx-auto w-50'>
                <img className='img' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                GitHub Sign In</button>
        </div>
    );
};

export default SocialLogin;