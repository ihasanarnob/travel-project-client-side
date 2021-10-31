import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

  const email = user.email;

  useEffect(() => {
    fetch(`https://fathomless-cove-88059.herokuapp.com/myBookings/${email}`)
      .then((res) => res.json())
      .then((data) =>setOrders(data));
        }, [email]);

  
  // Delete from booking list
  const handleDeleteBooking = id =>{
    const deleteProceed = window.confirm('Are you sure you want to cancel your booking?')
    if (deleteProceed) {
      const url = `https://fathomless-cove-88059.herokuapp.com/myBookings/${id}`;
      fetch(url,{
        method: 'DELETE',

      })
      .then(res => res.json())
      .then((data) =>{
        if (data.deletedCount>0) {
          alert('Booking Cancelled!')
          const remainingOrders = orders.filter(order => order._id !== id) 
          setOrders(remainingOrders); 
      }
   })
      
    }
   
    

  }


    return (
        <div className="container">
            <div className="my-5 p-3 text-primary bg-dark">
            <h5> User Name : {user.displayName} </h5>
             <h5> Logging email: {user.email} </h5>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                orders.map(order=> <div key={order._id} className="col">
                <div className="card">
                  <img src={order.imageUrl} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{order.name}</h5>
                    <p className="card-text"> {order.description} </p>
                    <button onClick={()=> handleDeleteBooking(order._id)} className="btn btn-danger py-2 px-4">Cancel Booking</button>
                  </div>
                </div>
              </div> )
            }
            </div>
        </div>
    );
};

export default Booking;