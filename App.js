import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './Home';
import Props from './Props';
import Style from './Style'
import Layout from './LayoutWithFlexbox'

const AppNavigator = createStackNavigator({
  HomeScreen: { 
    screen: Home,
  },
  PropsScreen: { 
    screen: Props,
  },
  StyleScreen: { 
    screen: Style,
  },
  LayoutScreen: { 
    screen: Layout,
  },
});

const App = createAppContainer(AppNavigator);

export default App;
