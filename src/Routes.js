import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import App from './App.js';




export default [
  {
    component: App,
    routes: [
      {
        component: Home,
        path: '/',
        exact: true
      },
      {
        component: Login,
        path: '/login',
        exact: true
      },
      {
        component: Register,
        path: '/register',
      },
    ]
  }
];