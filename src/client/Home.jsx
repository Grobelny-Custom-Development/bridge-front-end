import React, { Fragment } from 'react';
import MeetingActive from './meeting/MeetingActive.jsx';
import MeetingTemplateActive from './meeting/MeetingTemplateActive.jsx';
import Button from './bridge-components/Button.jsx';
const Home = (props) => {
  const { history } = props;
  return(
  <Fragment>
    <h1> Your Meetings: </h1>
    <MeetingActive />
    <h1> Create a New Meeting: </h1>
    <Button onClick={ () => history.push('/meeting/create')} text="Create Meeting" />
    <h1> Trending Templates: </h1>
    <MeetingTemplateActive />
  </Fragment>
  )
};

export default Home;
