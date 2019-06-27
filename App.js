import React, { Component } from 'react';
import { createAppContainer, createDrawerNavigator, DrawerNavigator } from 'react-navigation';
import Home from './src/Screens/Home';
import Note from './src/Screens/EditNote';
import AddNote from './src/Screens/AddNote';
import DrawerMenu from './src/Components/Drawer';

const AppDrawerNavigator = createDrawerNavigator({
  Home: { screen: Home },
  Note: { screen: Note },
  AddNote: { screen: AddNote } 
}, {
  contentComponent: DrawerMenu,
  drawerWidth: 230
});

const appContainer = createAppContainer(AppDrawerNavigator);
export default appContainer;
