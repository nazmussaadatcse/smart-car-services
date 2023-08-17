import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {

    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(user);

    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('https://smart-car-server-snowy.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    form.reset();
                    alert('an order placed successfully')
                    navigate('/orders');
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <form onSubmit={handlePlaceOrder}>
            <h2 className="text-4xl">You are going to order: {title}</h2>
            <h4 className="text-3xl">price: ${price}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                <input name='' type="email" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
            </div>
            <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your message"></textarea>
            <input className="btn btn-success" type="submit" value="Place Order" />

        </form>

    );
};

export default CheckOut;