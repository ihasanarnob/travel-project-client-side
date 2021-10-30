import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

  const email = user.email;

  useEffect(() => {
    fetch(`http://localhost:5000/myBookings/${email}`)
      .then((res) => res.json())
      .then((data) =>setOrders(data));
  }, [email]);
  console.log(orders);
    return (
        <div className="container">
            <h5> User Info : {user.displayName}  Logging email: {user.email} </h5>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                orders.map(order=> <div className="col">
                <div className="card">
                  <img src={order.imageUrl} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{order.name}</h5>
                    <p className="card-text"> {order.description} </p>
                  </div>
                </div>
              </div> )
            }
            </div>
        </div>
    );
};

export default Booking;