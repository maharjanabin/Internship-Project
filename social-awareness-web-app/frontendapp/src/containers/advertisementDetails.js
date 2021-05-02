import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdvertisementDetail = (props) => {
    const [Advertisement, setAdvertisement] = useState({});

    useEffect(() => {
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/advertisement/${slug}`);
                setAdvertisement(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    const createAdvertisement = () => {
        return {__html: Advertisement.content}
    };

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    return (
        <div className='container mt-3'>
            <h1 className='display-2'>{Advertisement.title}</h1>
            <h4>{Advertisement.month} {Advertisement.day}</h4>
            <div className="col-auto d-none d-lg-block">
                <img width='200' height='250' src={Advertisement.poster} alt='poster' />
            </div>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createAdvertisement()} />
            <hr />
            <p className='lead mb-5'><Link to='/Advertisement' className='font-weight-bold'>Back to Advertisements</Link></p>
        </div>
    );
};

export default AdvertisementDetail;