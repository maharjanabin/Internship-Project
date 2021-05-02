import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Advertisement = () => {
    const [Advertisements, setAdvertiement] = useState([]);

    useEffect(() => {
        const fetchAdvertisements = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/advertisement/`);
                setAdvertiement(res.data);
            }
            catch (err) {

            }
        }

        fetchAdvertisements();
    }, []);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getAdvertisements = () => {
        let list = [];
        let result = [];
        
        Advertisements.map(AdvertisementPost => {
            return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <h3 className="mb-0">{AdvertisementPost.title}</h3>
                        <div className="mb-1 text-muted">{AdvertisementPost.month} {AdvertisementPost.day}</div>
                        <Link to={`/Advertisement/${AdvertisementPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='200' height='250' src={AdvertisementPost.poster} alt='poster' />
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }

        return result;
    };

    return (
        <div className='container mt-3'>
             {getAdvertisements()}
        </div>
    );
};

export default Advertisement;