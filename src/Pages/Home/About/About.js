import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col items-center lg:flex-row">
                    <div className='relative md:w-2/4'>
                        <img src={person} alt='' className="w-4/5 h-80 rounded-lg shadow-2xl" />
                        <img src={parts} alt='' className="absolute w-60 h-80 top-24 right-4 border-8 border-white rounded-lg shadow-2xl" />
                    </div>
                    <div className='md:w-2/5 mt-24 md:m-0'>
                        <h1 className='text-rose-600 font-bold'>About Us</h1>
                        <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="pt-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p> <br />
                        <p>
                            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p> <br />
                        <button className="btn btn-secondary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;