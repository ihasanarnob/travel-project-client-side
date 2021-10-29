import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [info,setInfo] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/treks')
        .then(res => res.json())
        .then(data => {
            const matchedInfo = data?.find(singleInfo=> singleInfo._id == id)
            setInfo(matchedInfo);
        })
    },[id]);
    return (
        <div>
            <h4>Hello {user.displayName} </h4>
            <h3> {user.email} </h3>

            <h3>This is booking id : {id}</h3>
            
            <div className="card mb-3">
            <img src={info.imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{info.name}</h5>
                <p className="card-text">{info.description}</p>
                <h6 className="card-text"> Starts From ${info.price} </h6>
            </div>
            </div>
        </div>
    );
};

export default Booking;