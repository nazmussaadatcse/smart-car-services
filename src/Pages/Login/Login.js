import React, { useContext, useState } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {

    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathName || '/';
    const [errorMessage, setErrorMessage] = useState(null);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;


                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                // jwt token 
                fetch('https://smart-car-server-snowy.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('smart-car-token', data.token)
                        navigate(from, { replace: true })
                    })
                    .catch(error => {
                        setErrorMessage('An error occurred while processing your request.'); // Set error message
                        console.error(error);
                        clearErrorMessage();
                    });
            })
            .catch(err => {
                setErrorMessage('Invalid email or password.'); // Set error message
                console.error(err);
                clearErrorMessage();
            });

            const clearErrorMessage = () => {
                setTimeout(() => {
                    setErrorMessage(null);
                }, 5000); // 5000 milliseconds = 5 seconds
            };

    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        {errorMessage && (
                            <div className="text-red-500 mt-2">
                                {errorMessage}
                            </div>
                        )}
                        <div className="form-control mt-6">
                            <button type='submit' value='Login' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center'>New to Smart Car?<Link className='text-orange-600 font-bold' to="/signup"> Sign Up</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;