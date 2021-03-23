import React, { lazy } from 'react';

// Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import SmokingRoomsSharpIcon from '@material-ui/icons/SmokingRoomsSharp';

// Pages
import Login from 'pages/Login';
import ForgotPassword from 'pages/ForgotPassword';
import Bebidas from 'pages/Bebidas';
import Hookah from 'pages/Hookah';

// Logged Pages
const Dashboard = lazy(() => import('pages/Dashboard'));
const Users = lazy(() => import('pages/Users'));
const Profile = lazy(() => import('pages/Profile'));

const config = {
  public: [
    {
      path: '/login',
      component: Login,
      exact: true,
    },
    {
      path: '/esqueci-minha-senha',
      component: ForgotPassword,
      exact: true,
    },
  ],
  protected: [
    {
      path: '/',
      component: Dashboard,
      title: 'Dashboard',
      exact: true,
      icon: <DashboardIcon />,
    },
    {
      path: '/users',
      component: Users,
      title: 'Usuários',
      exact: true,
      icon: <PeopleIcon />,
    },
    {
      path: '/profile',
      component: Profile,
      title: 'Perfil',
      exact: true,
      icon: <AccountBoxIcon />,
    },
    {
      path: '/bebidas',
      component: Bebidas,
      title: 'Bebidas',
      exact: true,
      icon: <LocalBarIcon />,
    },
    {
      path: '/hookah',
      component: Hookah,
      title: 'Tabacaria',
      exact: true,
      icon: <SmokingRoomsSharpIcon />,
    },
  ],
};

export default config;
