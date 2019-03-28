import { createStackNavigator } from 'react-navigation';

import Login from './screens/login';
import MainPage from './screens/mainPage';
import List from './screens/shoppingList';
import Preview from './screens/preview';
import Configuration from './screens/configuration';
import History from './screens/history';

const App = createStackNavigator({
  Login : {screen: Login},
  Preview : {screen: Preview},
  Configuration: {screen: Configuration},
  MainPage : {screen: MainPage},
  List: { screen: List },
  History: { screen: History}
})

export default App
