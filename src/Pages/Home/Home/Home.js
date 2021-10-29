import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css';

import destination1 from '../../../Images/destination1.jpg';
import destination2 from '../../../Images/destination2.jpg';
import destination3 from '../../../Images/destination3.jpg';
import destination4 from '../../../Images/destination4.jpg';
import destination5 from '../../../Images/destination5.jpg';
import destination6 from '../../../Images/destination6.jpg';

import thumbnail1 from '../../../Images/thumbnil1.png';
import thumbnail2 from '../../../Images/thumbnil2.png';
import thumbnail3 from '../../../Images/thumbnil3.png';
import Trekking from '../Trekking/Trekking';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Trekking></Trekking>
           {/* extra parts  */}
           <div className="container">
           <h1 className="my-3">Top Destinations</h1>
           <div className="row row-cols-1 row-cols-md-3 g-4 ">
            <div className="col">
                <div className="card">
                <img src={destination1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Annapurna Trekking</h5>
                    <p className="card-text">17 tours</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={destination2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Everest Trekking</h5>
                    <p className="card-text">9 tours</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={destination3} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Langtang Trekking</h5>
                    <p className="card-text">6 tours</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={destination4} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Kanchenjunga Trekking</h5>
                    <p className="card-text">1 tour</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={destination5} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Manaslu Trekking</h5>
                    <p className="card-text">2 tours</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={destination6} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Restricted Area Trekking</h5>
                    <p className="card-text">3 tours</p>
                </div>
                </div>
            </div>
            </div>
           </div>
           {/* another section */}
           <div className= " p-5 section-container my-3">
                <div>
                <img className="mx-auto" src={thumbnail1} alt="" />
                <h5>Travel Insurance</h5>
                <p>We recommend you to purchase a travel insurance before you begin your trekking experience. There are number of insurance brokers available to choose from...</p>
                </div>
                <div>
                <img className="mx-auto" src={thumbnail2} alt="" />
                <h5>Visa System</h5>
                <p>Depending on your nationality there may be ….. requirements for entry to Nepal. We recommend contacting an embassy before your travel.</p>
                </div>
                <div>
                <img className="mx-auto" src={thumbnail3} alt="" />
                <h5>About Nepal</h5>
                <p>Nepal is truly amazing destination with trekking and hiking experiences available throughout the year. Experience amazing sceneries and meet the locals.</p>
                </div>
           </div>
        </div>
    );
};

export default Home;