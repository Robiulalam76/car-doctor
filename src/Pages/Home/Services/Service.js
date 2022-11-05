import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, img, title, price } = service
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-sm shadow-gray-700 mb-12">
                <figure className='px-4 pt-4'><img className='rounded-lg w-full h-56' src={img} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <div className="card-actions justify-between items-center">
                        <p className='text-orange-600 font-bold text-[18px]'>Price: ${price}</p>
                        <Link to={`/services/${_id}`}>
                            <svg className='text-orange-600 font-bold text-2xl hover:text-blue-600' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;