import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { loginWithEmailPassword, signupWithGoogle } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        loginWithEmailPassword(email, password)
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                fetch('https://car-doctor-server-nine.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data.token)
                        localStorage.setItem('user-token', data.token)
                        navigate(from, { replace: true });
                        Swal.fire(
                            'Welcome To You!',
                            'Your Account Login Seccessfully.',
                            'success'
                        )
                    })

            })
            .catch((error) => {
                // console.error(error);
            })
    }

    const handleGoogleLogin = () => {
        signupWithGoogle(googleProvider)
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                fetch('https://car-doctor-server-nine.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data.token)
                        localStorage.setItem('user-token', data.token)
                        navigate(from, { replace: true });
                        Swal.fire(
                            'Welcome To You!',
                            'Your Account Login Seccessfully.',
                            'success'
                        )
                    })

            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div className="my-12">
                <div className="hero-content flex flex-col justify-between md:flex-row items-center">
                    <div className="w-[80%] md:w-96">
                        <img className='w-full' src={img} alt="" />
                    </div>
                    <div className="card w-96 shadow-2xl">
                        <h1 className='text-3xl font-bold text-center pt-4 pb-0'>LOG IN</h1>
                        <form onSubmit={handleLogin} className="card-body pt-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email Address</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button type='submit' className="py-3 px-6 rounded-lg font-bold text-white bg-orange-600 hover:bg-orange-700">Login</button>
                            </div>
                            <div>
                                <h1 className='text-center py-3'>Or Log in with</h1>
                                <div className='flex justify-center'>
                                    <img onClick={handleGoogleLogin} className='w-8 mr-5 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" />
                                    <img className='w-8 mr-5 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" />
                                    <img className='w-8 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/2504/2504799.png" alt="" />
                                </div>
                            </div>
                            <p className='text-center'>Are You New Here? <Link to='/signup' className='text-orange-600 font-bold hover:text-blue-600'>Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;