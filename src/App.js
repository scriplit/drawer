import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/AppLayout/Layout';
import HomeIcon from '@material-ui/icons/Home';
import LayersIcon from '@material-ui/icons/Layers';
import CategoryIcon from '@material-ui/icons/Category';
import ComputerIcon from '@material-ui/icons/Computer';
import BusinessIcon from '@material-ui/icons/Business';
import HomeView from './Components/Views/HomeView';
import EnvironmentsView from './Components/Views/EnvironmentsView';
import DatabasesView from './Components/Views/DatabasesView';
import ServersView from './Components/Views/ServersView';
import ServicesView from './Components/Views/ServicesView';

function App() {

  let appViews = [{
    text: 'Home',
    icon: <HomeIcon />,
    content: <HomeView />,
    url: "/home"
  }, {
    text: 'Environments',
    icon: <LayersIcon />,
    content: <EnvironmentsView />,
    url: "/env"
  },
  {
    text: 'Services',
    icon: <CategoryIcon />,
    content: <ServicesView />,
    url: "/svc"
  }, {
    text: 'Servers',
    icon: <ComputerIcon />,
    content: <ServersView />,
    url: "/srv"
  }, {
    text: 'Databases',
    icon: <BusinessIcon />,
    content: <DatabasesView />,
    url: "/db"
  }];

  return (
    <BrowserRouter>
      <Layout views={appViews} title="App Dashboard" version="1.0"/>
    </BrowserRouter>
    
  );
}

export default App; 
