import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import App from './App.js';
import MeetingMenu from './meeting/MeetingMenu.jsx';

import MeetingRouter from './meeting/MeetingRouter.jsx';
import MeetingCreate from './meeting/create/MeetingCreate.jsx';
import MeetingActive from './meeting/MeetingActive.jsx';
import MeetingBrainstorm from './meeting/MeetingBrainstorm.jsx';
import MeetingPreview from './meeting/create/MeetingPreview.jsx';
import MeetingPrioritize from './meeting/MeetingPrioritize.jsx';
import MeetingBrainstormSummary from './meeting/MeetingBrainstormSummary.jsx';


export default [
  {
    component: App,
    routes: [
      {
        component: Home,
        path: '/',
        exact: true,
      },
      {
        component: Login,
        path: '/login',
        exact: true,
      },
      {
        component: Register,
        path: '/register',
        exact: true,
      },
      {
        component: MeetingMenu,
        path: '/meeting',
        exact: true,
      },
      {
        path: '/meeting/:category?/:meetingID?/:meetingActivity?/:activitySummary',
        component: MeetingRouter,
        routes: [
          {
            path: '/meeting/create/',
            component: MeetingCreate,
            exact: true,
          },
          {
            path: '/meeting/active/',
            component: MeetingActive,
            exact: true,
          },

          {
            path: '/meeting/preview/:meetingID/',
            component: MeetingPreview,
            exact: true,
          },
          {
            path: '/meeting/activity/:meetingID/brainstorm/',
            component: MeetingBrainstorm,
            exact: true,
          },
          {
            path: '/meeting/activity/:meetingID/brainstorm/',
            component: MeetingBrainstormSummary,
          },
          {
            path: '/meeting/activity/:meetingID/prioritization/',
            component: MeetingPrioritize,
            exact: true,
          },
        ],
      },
    ],
  },
];
