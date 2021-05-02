import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const [Campaigns, setCampaign] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    useEffect(() => {
        const category = props.match.params.id;
        setCurrentCategory(capitalizeFirstLetter(category));

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const fetchData = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/campaign/category`, { category }, config);
                setCampaign(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getCategoryCampaign = () => {
        let list = [];
        let result = [];

        Campaigns.map(CampaignPost => {
            return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(CampaignPost.category)}</strong>
                        <h3 className="mb-0">{CampaignPost.title}</h3>
                        <div className="mb-1 text-muted">{CampaignPost.month} {CampaignPost.day}</div>
                        <p className="card-text mb-auto">{CampaignPost.excerpt}</p>
                        <Link to={`/Campaign/${CampaignPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='200' height='250' src={CampaignPost.thumbnail} alt='thumbnail' />
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
            <h3 className='display-4'>{currentCategory} Category</h3>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" to='/category/social'>Social</Link>
                    <Link className="p-2 text-muted" to='/category/anti-drug'>Anti-Drug</Link>
                    <Link className="p-2 text-muted" to='/category/domestic-voilence'>Domestic Voilence</Link>
                    <Link className="p-2 text-muted" to='/category/racial-discrimination'>Racial Discrimination</Link>
                    <Link className="p-2 text-muted" to='/category/bullying'>Bullying</Link>
                    <Link className="p-2 text-muted" to='/category/anti-beggary'>Anti-Beggary</Link>
                    <Link className="p-2 text-muted" to='/category/anti-rape'>Anti-Rape</Link>
                    <Link className="p-2 text-muted" to='/category/anti-abortion'>Anti-Abortion</Link>
                    <Link className="p-2 text-muted" to='/category/anti-gambling'>Anti-Gambling</Link>
                    <Link className="p-2 text-muted" to='/category/climate-change'>Climate-Change</Link>
                </nav>
            </div>
            {getCategoryCampaign()}
        </div>
    );
};

export default Category;