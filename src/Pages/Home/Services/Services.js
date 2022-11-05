import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services);
    return (
        <div className='w-[90%] md:w-fit mx-auto' id='services'>
            <div className='text-center my-6'>
                <h1 className='text-center text-orange-600 font-bold'>Service</h1>
                <h1 className='text-3xl font-bold'>Our Service Area</h1>
                <p className='w-96 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;