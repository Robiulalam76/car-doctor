import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';
import Swal from 'sweetalert2'

const Orders = () => {
    const { user, logout } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://car-doctor-server-nine.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('user-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logout()
                }
                return res.json()
            })
            .then(data => {
                setOrders(data)
            })
    }, [user?.email, logout])

    const handleDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger mx-3'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'No, Cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://car-doctor-server-nine.vercel.app/orders/${id}`, {
                    method: 'DELETE',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('user-token')}`
                    }
                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = orders.filter(ord => ord._id !== id)
                            setOrders(remaining)
                        }
                    })
            }
        })
    }
    const handleStatusUpdate = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger mx-3'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://car-doctor-server-nine.vercel.app/orders/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('user-token')}`
                    },
                    body: JSON.stringify({ status: 'Approved' })
                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            const remaining = orders.filter(ord => ord._id !== id)
                            const approving = orders.find(ord => ord._id === id)
                            approving.status = 'Approved'
                            const newOrders = [approving, ...remaining]
                            setOrders(newOrders)
                        }
                    })
            }
        })
    }
    return (
        <div>

            <div className="overflow-x-auto w-full my-12">
                <table className="table w-full text-center">

                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <button className="btn btn-sm btn-circle btn-outline bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </label> */}
                                <h1 className='font-bold'>{orders.length} Orders</h1>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Order Id</th>
                            <th>Details</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></OrderRow>)
                        }
                    </tbody>

                </table>
            </div>
            {
                orders.length === 0 && <h1 className='text-center font-bold text-blue-600 text-2xl'>No Items</h1>
            }
            <div className='flex justify-end mb-6'>

                {
                    orders.length > 0 && <button className='flex items-center btn btn-warning'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                            </svg>
                        </span>
                        <span>Clear Orders</span>
                    </button>
                }
            </div>
        </div>
    );
};

export default Orders;