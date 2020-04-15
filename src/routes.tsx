import React from 'react';
import {
Switch,
Route
} from 'react-router-dom'

import HomePage from './components/home'
import AboutPage from './components/about';
import PartyPage from './components/party';
import KidsPage from './components/kids';
import LoginPage from './components/login';
import InvitationPage from './components/invitation';
import WendingPage from './components/wending';
import SignUpPage from './components/signUp';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/about' component={AboutPage}/>
            <Route path='/party' component={PartyPage}/>
            <Route path='/kids' component={KidsPage}/>
            <Route path='/invitation' component={InvitationPage}/>
            <Route path='/wedding' component={WendingPage}/>
            
            <Route path='/signUp' component={SignUpPage}/>
            <Route path='/login' component={LoginPage}/>
        </Switch> 
    )
};

export default Routes;