import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const { _id, title, price } = useLoaderData()
    const navigate = useNavigate()

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const name = `${event.target.firstName.value} ${event.target.lastName.value}`
        const phone = event.target.phone.value;
        const email = user?.email || event.target.email.value || 'Unsubscribe'
        const message = event.target.message.value;

        const order = {
            serviceId: _id,
            serviceName: title,
            price: price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('user-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    event.target.reset();
                    Swal.fire(
                        'SuccessFull!',
                        'Your Order is Seccessfully.',
                        'success'
                    )
                    navigate('/home')
                }
            })
            .catch(error => console.log(error))

        console.log(order);
    }



    return (
        <div>
            <h1>{title}</h1>

            <form onSubmit={handleFormSubmit} className='bg-gray-100 p-8 my-8 rounded-lg'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <input type="text" name='firstName' placeholder="Your First Name" className="input input-bordered w-full" required />
                    <input type="text" name='lastName' placeholder="Your Last Name" className="input input-bordered w-full" required />
                    <input type="text" name='phone' placeholder="Your Phone Number" className="input input-bordered w-full" required />
                    <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="Your Email" className="input input-bordered w-full" required />

                </div>
                <textarea className='input input-bordered textaria mt-6 p-4 textarea-bordered min-h-24 max-h-32 w-full' name="message" placeholder='Your Message' id="" cols="30" rows="10"></textarea>

                <input type="submit" value="Order Confirm" className='btn bg-orange-600 hover:bg-orange-700 border-0 mt-6 w-full' />
            </form>
        </div>
    );
};

export default Checkout;