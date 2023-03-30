import React from 'react';
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='line-color w-50 line-height'></div>
                <p className='mt-2 px-2'>or</p>
                <div className='line-color w-50 line-height'></div>
            </div>
            <button className='btn btn-primary mt-2 d-block mx-auto w-50'>
                <img className='img' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                Google Sign In</button>
            <button className='btn btn-primary mt-2 d-block mx-auto w-50'>
                <img className='img' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png" alt="" />
                Facebook Sign In</button>
            <button className='btn btn-primary mt-2 d-block mx-auto w-50'>
                <img className='img' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                GitHub Sign In</button>
        </div>
    );
};

export default SocialLogin;