import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Trekking = () => {
    const [events,setEvents] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/treks')
        .then(res => res.json())
        .then(data => setEvents(data));
    },[])
    return (
        <div>
            <h2>Popular Treks { events.length } </h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">

                {
                    events.map(event =>  <div className="col">
                    <div className="card">
                    <img src={event.imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{event.name}</h5>
                        <p className="card-text">{event.description}</p>
                        <h6 className="card-text">{event.price}</h6>
                    </div>
                    <div className="card-footer">
                        <Link to = {`/booking/${event._id}`}>
                        <button className="btn btn-primary">Proceed Booking</button>
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