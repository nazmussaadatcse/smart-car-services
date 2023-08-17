import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetch(`https://smart-car-server-snowy.vercel.app/orders?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('smart-car-token')}`
            }
            
        })
            .then(res => {
                console.log('res.status',res.status)
                if(res.status === 401 || res.status === 403){
                    return logOut();
                }
                return res.json()
            })
            .then(data => {setOrders(data)})
 
    }, [user?.email,logOut])


    const handleDelete = id => {
        const proceed = window.confirm('Cancel order?');
        if (proceed) {
            fetch(`https://smart-car-server-snowy.vercel.app/orders/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    alert('Order Cancelled!');
                    const remaining = orders.filter(order=>order._id!==id);
                    setOrders(remaining);
                }
            })
        }
    }

    const handleStatusUpdate = id =>{
        fetch(`https://smart-car-server-snowy.vercel.app/orders/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                const remaining = orders.filter(order=> order._id!==id);
                const approving = orders.find(order=>order._id===id);
                approving.status= 'Approved';

                const newOrders = [approving,...remaining];
                setOrders(newOrders);
            }
        })
    }

    return (
        <div>
            <h2 className="text-5xl">You have {orders.length} Orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(order=> <OrderRow
                            key={order._id}
                            order={order}
                            handleDelete = {handleDelete}
                            handleStatusUpdate = {handleStatusUpdate}
                            ></OrderRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;