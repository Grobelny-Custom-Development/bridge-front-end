import App from './App.js';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import MeetingMenu from './meeting/MeetingMenu.jsx';


import MeetingRouter from './meeting/MeetingRouter.jsx';
import MeetingRoutes from './meeting/MeetingRoutes.js';


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
        routes: MeetingRoutes,
      },
    ],
  },
];
