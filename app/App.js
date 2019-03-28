import { createStackNavigator } from 'react-navigation';

import Login from './screens/login';
import MainPage from './screens/mainPage';
import List from './screens/shoppingList'

const App = createStackNavigator({
  MainPage : {screen: MainPage},
  List: { screen: List },

})

export default App
