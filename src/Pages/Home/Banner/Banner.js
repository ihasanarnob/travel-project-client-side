import React from 'react';
import bannerImg from '../../../Images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <img className="img-fluid" src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;