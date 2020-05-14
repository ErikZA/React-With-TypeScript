import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/home";
import AboutPage from "./components/about";
import PartyPage from "./components/home/party";
import KidsPage from "./components/home/kids";
import LoginPage from "./components/login";
import InvitationPage from "./components/home/invitation";
import WendingPage from "./components/home/wending";
import SignUpPage from "./components/signUp";
import EventsHomePage from "./components/home/eventsHome";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route path="/signUp" component={SignUpPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="*" component={HomePage} />
    </Switch>
  );
};

const RoutesHome = () => {
  return (
    <Switch>
      <Route exact path="/" component={EventsHomePage} />
      <Route path="/party" component={PartyPage} />
      <Route path="/kids" component={KidsPage} />
      <Route path="/invitation" component={InvitationPage} />
      <Route path="/wedding" component={WendingPage} />
    </Switch>
  );
};

export { Routes, RoutesHome };
