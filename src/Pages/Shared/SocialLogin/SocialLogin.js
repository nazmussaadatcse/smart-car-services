import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../api/auth';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathName || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);

                setAuthToken(user);
                navigate(from, { replace: true });
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <p className='text-center text-orange-900 m-2 font-semibold'><small>Login With</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-ghost shadow-lg'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;