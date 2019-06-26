import React, { Component } from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import Home from './src/Screens/Home';
import Note from './src/Screens/Note';

const AppDrawerNavigator = createDrawerNavigator({
  Home: { screen: Home },
  Note: { screen: Note }
});

const appContainer = createAppContainer(AppDrawerNavigator);
export default appContainer;
