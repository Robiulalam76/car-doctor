import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const [profileShow, setProfileShow] = useState(false)
    const [checkoutShow, setCheckoutShow] = useState(false)

    const handleLogout = () => {
        logout()
    }

    return (
        <div>
            <div className="navbar bg-blue-100 text-black font-bold">
                <div className="navbar-start">

                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='w-16' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden md:block lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Link className='mr-6' to='/home'>HOME</Link>
                        <Link className='mr-6' to='/about'>ABOUT</Link>
                        <a href='#services' className='mr-6' >SERVICES</a>
                        <Link className='mr-6' to='/blog'>BLOG</Link>
                        <Link className='mr-6' to='/contact'>CONTACT</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end hidden md:block mr-2">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <Link to='/orders' className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                {/* <span className="badge badge-sm indicator-item">0</span> */}
                            </Link>
                        </label>
                        {/* <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-96 bg-base-100 shadow">
                            <div className="card-body flex flex-col items-center justify-center text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto bg-rose-100 rounded-full p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="font-bold text-lg">0 Items</span>
                                <span className="text-info">You have not added courses to the cart</span>
                                <Link className="card-actions w-full">
                                    <button className="btn btn-primary btn-block">Check Out</button>
                                </Link>
                            </div>
                        </div> */}
                    </div>
                    <Link>
                        <button className="btn btn-sm btn-outline mr-3 btn-secondary py-0 hidden md:block">Appointment</button>
                    </Link>
                </div>

                <div tabIndex={1} className="dropdown text-center mx-auto">
                    <label className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul className="menu md:hidden menu-compact dropdown-content right-[50%] mt-3 p-2 shadow bg-base-100 rounded-box w-80 md:w-96">
                        <div className='mt-2 md:mt-0'>
                            {
                                user?.uid ? <div className="dropdown">
                                    <label onClick={() => setProfileShow(!profileShow)} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} alt='' />
                                        </div>
                                    </label>
                                    <ul className={`mt-3 p-2 shadow bg-base-100 rounded-box w-52 mx-auto ${profileShow ? 'menu menu-compact dropdown-content' : 'hidden'}`}>
                                        <div className='flex flex-col items-center justify-center'>
                                            <div className="w-10 rounded-full">
                                                <img className='rounded-full' src={user?.photoURL} alt='' />
                                            </div>
                                            <h1 className='text-center font-bold text-xl'>{user?.displayName}</h1>

                                            <div className='flex justify-evenly'>
                                                <Link onClick={handleLogout}>
                                                    <button className='btn btn-sm btn-danger mr-2' >Logout</button>
                                                </Link>
                                                <Link>
                                                    <button className='btn btn-sm btn-primary'>Profile</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                    :
                                    <Link className='btn btn-sm btn-primary' to='/login'>LOGIN</Link>
                            }
                        </div>
                        <Link className='mt-2 md:mt-0' to='/home'>HOME</Link>
                        <Link className='mt-2 md:mt-0' to='/about'>ABOUT</Link>
                        <Link className='mt-2 md:mt-0' to='/services'>SERVICES</Link>
                        <Link className='mt-2 md:mt-0' to='/blog'>BLOG</Link>
                        <Link className='mt-2 md:mt-0' to='/contact'>CONTACT</Link>

                        <div className="dropdown">
                            <label onClick={() => setCheckoutShow(!checkoutShow)} tabIndex={0} className="btn btn-ghost btn-circle">
                                <Link to='/orders' className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    {/* <span className="badge badge-sm indicator-item">0</span> */}
                                </Link>
                            </label>
                            {/* <div tabIndex={0} className={`mt-3 p-2 shadow bg-base-100 rounded-box w-80 mx-auto ${checkoutShow ? 'menu menu-compact dropdown-content' : 'hidden'}`}>
                                <div className="card-body flex flex-col items-center justify-center text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto bg-rose-100 rounded-full p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="font-bold text-lg">0 Items</span>
                                    <span className="text-info">You have not added courses to the cart</span>
                                    <Link className="card-actions w-full">
                                        <button className="btn btn-primary btn-block">Check Out</button>
                                    </Link>
                                </div>
                            </div> */}
                        </div>

                        <Link className='mt-2 md:mt-0' >
                            <button className="btn btn-sm btn-outline btn-secondary py-0 md:hidden">Appointment</button>
                        </Link>
                    </ul>
                    <div className='hidden md:block'>
                        {
                            user?.uid ? <div className="navbar-end dropdown dropdown-end hidden md:block">
                                <label className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt='' />
                                    </div>
                                </label>
                                <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <div className='flex flex-col items-center justify-center'>
                                        <div className="w-10 rounded-full">
                                            <img className='rounded-full' src={user?.photoURL} alt='' />
                                        </div>
                                        <h1 className='text-center font-bold text-xl'>{user?.displayName}</h1>

                                        <div className='flex justify-evenly'>
                                            <Link onClick={handleLogout}>
                                                <button className='btn btn-sm btn-danger mr-2' >Logout</button>
                                            </Link>
                                            <Link>
                                                <button className='btn btn-sm btn-primary'>Profile</button>
                                            </Link>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                                :
                                <Link className='btn btn-sm btn-primary' to='/login'>LOGIN</Link>
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Header;
