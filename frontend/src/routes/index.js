import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import NewMeetup from '~/pages/Meetup/New';
import EditMeetup from '~/pages/Meetup/Edit';
import Details from '~/pages/Details';
import Default from '~/pages/Default';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetup/new" component={NewMeetup} isPrivate />
      <Route path="/meetup/edit/:id" component={EditMeetup} isPrivate />
      <Route path="/meetup/:id/details" component={Details} isPrivate />
      <Route path="/" component={Default} />
    </Switch>
  );
}
