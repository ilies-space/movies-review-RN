import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from '../routes/homeStack';
import aboutStack from '../routes/aboutStack';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  about: {
    screen: aboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
