import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import about from '../screens/about';

const screens = {
  about: {
    screen: about,
  },
};

// home stack navigator screens
const aboutStack = createStackNavigator(screens);

export default aboutStack;
