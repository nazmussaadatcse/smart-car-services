import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';


const RequireAUth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{
            from: location
        }} replace />;
    }
    if (!user.emailVerified) {
        return <div>
            <h3 className='text-danger'> Your Email is not verified  </h3>
            <h3 className='text-success'> Please Verify Your Email</h3>
            <button className='btn btn-primary'
                onClick={async () => {
                    const success = await sendEmailVerification();
                    if (success) {
                        toast('Sent Email');
                    }
                }}
            >
                Send Verification Email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;

};

export default RequireAUth;