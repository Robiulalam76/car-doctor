import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, price, serviceId, phone, status } = order;
    const [orderService, setOrderService] = useState({})
    const { img } = orderService

    useEffect(() => {
        fetch(`https://car-doctor-server-nine.vercel.app/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [])


    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-lg w-12 h-12">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='text-left'>
                        <div className="font-bold">{serviceName}</div>
                        <span><small>{phone}</small></span>
                    </div>
                </div>
            </td>
            <td>
                <span className="font-bold">${price}</span>
            </td>
            <td>{serviceId}</td>
            <th>
                <Link to=''>
                    <button className="py-1 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white">Details</button>
                </Link>
            </th>
            <th>
                <button
                    disabled={status === 'Approved' ? true : false}
                    onClick={() => handleStatusUpdate(_id)}
                    className={`py-1 px-3 rounded-lg text-white ${status === 'Approved' ? 'bg-green-700 hover:bg-green-800' : 'bg-yellow-600 hover:bg-yellow-700'}`}>{status === 'Approved' ? 'Approved' : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;