import React from 'react';
import { Link } from 'react-router-dom';

const ManageOrders = () => {
    return (
        <div>
            <nav className=" justify-content-center bg-dark text-white m-5 p-5">
                    <Link to="/addtreks"
                    ><h5>Add A New Trek Place</h5></Link>
            </nav>
        </div>
    );
};

export default ManageOrders;