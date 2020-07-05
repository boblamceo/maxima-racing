

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BuyScreen from './screens/BuyScreen'
import GameScreen from './screens/GameScreen'

const bottomTabNavigator = createBottomTabNavigator({
  Buy: BuyScreen,
  Game: GameScreen
});

export default createAppContainer(bottomTabNavigator);
