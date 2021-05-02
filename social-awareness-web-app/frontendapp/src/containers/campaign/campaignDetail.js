import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CampaignDetail = (props) => {
    const [Campaign, setCampaign] = useState({});

    useEffect(() => {
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/campaign/${slug}`);
                setCampaign(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    const createCampaign = () => {
        return {__html: Campaign.content}
    };

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    return (
        <div className='container mt-3'>
            <h1 className='display-2'>{Campaign.title}</h1>
            <h2 className='text-muted mt-3'>Category: {capitalizeFirstLetter(Campaign.category)}</h2>
            <h4>{Campaign.month} {Campaign.day}</h4>
            <div className="col-auto d-none d-lg-block">
                <img width='200' height='250' src={Campaign.thumbnail} alt='thumbnail' />
            </div>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createCampaign()} />
            <hr />
            <p className='lead mb-5'><Link to='/Campaign' className='font-weight-bold'>Back to Campaigns</Link></p>
        </div>
    );
};

export default CampaignDetail;