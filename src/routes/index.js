import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from '../containers/main';
import Description from '../containers/description';
import SearchScreen from '../containers/searchScreen';

export default createStackNavigator({
  main: Main,
  searchScreen: SearchScreen,
  descriptionScreen: Description
}, {
  initialRouteName: 'main',
  headerMode: "none",
})
