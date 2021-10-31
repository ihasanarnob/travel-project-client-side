import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Trekking = () => {
    const [events,setEvents] = useState([]);
    useEffect(()=>{
        fetch('https://fathomless-cove-88059.herokuapp.com/treks')
        .then(res => res.json())
        .then(data => setEvents(data));
    },[]);

    const {user} = useAuth();

    const handleBooking = (index) => {
        const data = events[index];

        data.email = user.email;

        fetch("http://localhost:5000/addBookings", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result.insertedId);
            if (result.insertedId) {
                alert('already added')
            }
          });
      };


    return (
        <div>
            <h2 className="my-5">POPULAR TREKS </h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">

                {
                    events.map((event,index) =>  <div key={event._id} className="col">
                    <div className="card">
                    <img src={event.imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{event.name}</h5>
                        <p className="card-text">{event.description}</p>
                        <h6 className="card-text">{event.price}</h6>
                    </div>
                    <div className="card-footer">
                        <Link to ="/booking" >
                        <button onClick={()=>handleBooking(index)} className="btn btn-primary">Proceed Booking</button>
                        </Link>
                    </div>
                    </div>
                </div>  )
                }
            </div>
            

        </div>
    );
};
export default Trekking;