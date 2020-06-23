import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import about from '../screens/about';
import React from 'react';
import Header from '../shared/header';

const screens = {
  about: {
    screen: about,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="GameZone" navigation={navigation} />,
      };
    },
  },
};

// home stack navigator screens
const aboutStack = createStackNavigator(screens);

export default aboutStack;
