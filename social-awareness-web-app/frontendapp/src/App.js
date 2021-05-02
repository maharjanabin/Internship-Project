import React, { useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './containers/Home';
import Campaign from "./containers/campaign/campaign";
import CampaignDetail from './containers/campaign/campaignDetail';
import Category from './containers/campaign/category';
import Register from './containers/Register';
import Login from './containers/Login';

import { Provider } from 'react-redux';
import store from './store';
import Dashboard from "./containers/dashboard";
import Contact from "./containers/contact";
import Logout from "./containers/logout";
import Advertisement from "./containers/advertisement";
import AdvertisementDetail from "./containers/advertisementDetails";
import createCampaign from "./containers/campaign/createCampaign";

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/campaign' component={Campaign} />
                    <Route exact path='/category/:id' component={Category} />
                    <Route exact path='/Campaign/:id' component={CampaignDetail} />
                    <Route exact path='/advertisement' component={Advertisement} />
                    <Route exact path='/advertisement/:id' component={AdvertisementDetail} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/logout' component={Logout} />   
                    <Route exact path='/createCampaign' component={createCampaign} />                 
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;
