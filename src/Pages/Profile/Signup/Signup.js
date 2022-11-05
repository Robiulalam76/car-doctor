import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const Signup = () => {
    const { signupEmailAndPassword, signupWithGoogle, updateUserProfile } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()

    const handleSignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

        signupEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                handleUpdateProfile(name)
                navigate('/login')
                Swal.fire(
                    'Congartulation!',
                    'Your Account Seccessfully Created.',
                    'success'
                )
                event.target.reset()
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleUpdateProfile = (name) => {
        const profile = { displayName: name, photoURL: 'https://www.feedbackhall.com/uploads/user-icon.png' }
        updateUserProfile(profile)
    }

    const handleGoogleSignup = () => {
        signupWithGoogle(googleProvider)
            .then(result => {
                const user = result.user
                Swal.fire(
                    'Congartulation!',
                    'Your Account Seccessfully Created.',
                    'success'
                )
                navigate('/login')
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div className="my-12">
                <div className="hero-content flex flex-col justify-between md:flex-row items-center">
                    <div className="w-96">
                        <img className='w-full' src={img} alt="" />
                    </div>
                    <div className="card w-96 shadow-2xl">
                        <form onSubmit={handleSignup} className="card-body pt-0">
                            <h1 className='text-3xl font-bold text-center pt-4 pb-0'>SIGN UP</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email Address</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Strong Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover"></Link>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button type='submit' className="py-3 px-6 rounded-lg font-bold text-white bg-orange-600 hover:bg-orange-700">Sign Up</button>
                            </div>
                            <div>
                                <h1 className='text-center py-3'>Or Sign Up with</h1>
                                <div className='flex justify-center'>
                                    <img onClick={handleGoogleSignup} className='w-8 mr-5 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" />
                                    <img className='w-8 mr-5 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" />
                                    <img className='w-8 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/2504/2504799.png" alt="" />
                                </div>
                            </div>
                            <p className='text-center '>Already You Have an Account? <Link to='/login' className='text-orange-600 font-bold hover:text-blue-600'>Log in</Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;