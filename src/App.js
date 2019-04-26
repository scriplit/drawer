import React from 'react';
import './App.css';
import Layout from './Components/Layout';
import HomeIcon from '@material-ui/icons/Home';
import LayersIcon from '@material-ui/icons/Layers';
import CategoryIcon from '@material-ui/icons/Category';
import ComputerIcon from '@material-ui/icons/Computer';
import BusinessIcon from '@material-ui/icons/Business';
import HomeView from './Components/HomeView';
import EnvironmentsView from './Components/EnvironmentsView';
import DatabasesView from './Components/DatabasesView';
import ServersView from './Components/ServersView';
import ServicesView from './Components/ServicesView';

function App() {

  let appItems = [{
    text: 'Home',
    icon: <HomeIcon />,
    content: <HomeView />
  }, {
    text: 'Environments',
    icon: <LayersIcon />,
    content: <EnvironmentsView />
  },
  {
    text: 'Services',
    icon: <CategoryIcon />,
    content: <ServicesView />
  }, {
    text: 'Servers',
    icon: <ComputerIcon />,
    content: <ServersView />
  }, {
    text: 'Databases',
    icon: <BusinessIcon />,
    content: <DatabasesView />
  }];

  return (
    <Layout views={appItems} title="App Dashboard" version="1.0"/>
  );
}

export default App; 
