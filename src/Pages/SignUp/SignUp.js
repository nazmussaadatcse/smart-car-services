import React, { useContext, useState } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { setAuthToken } from '../../api/auth';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);


    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /(?=.*?[#?!@$%^&*-]).{6,}/;

        const clearErrorMessage = () => {
            setTimeout(() => {
                setErrorMessage(null);
            }, 5000); // 5000 milliseconds = 5 seconds
        };

        if (!password.match(passwordRegex)) {
            console.error("at least 6 characters and 1 special character.");
            setErrorMessage('at least 6 characters and 1 special character.'); // Set error message
                clearErrorMessage();
            return;
        }


        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setAuthToken(user);
            navigate('/');
            
        })
        .catch(err=>{
            console.error(err);
        })

    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' required placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                                           
                            </label>
                        </div>
                        {errorMessage && (
                            <div className="text-red-500 mt-2">
                                {errorMessage}
                            </div>
                        )}
                        <div className="form-control mt-6">
                            <button type='submit' value='Sign Up' className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center'>Already have an account?<Link className='text-orange-600 font-bold'to="/login"> Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;