import React from 'react';
import MeetingActive from './meeting/MeetingActive.jsx';

const Home = () => (
  <header>
    <h1> Your Meetings: </h1>
    <MeetingActive />
    <h1> Create a New Meeting: </h1>

    <h1> Trending Templates: </h1>
    <p> No Active Templates</p>
  </header>
);

export default Home;
