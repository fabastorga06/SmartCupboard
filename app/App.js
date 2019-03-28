import { createStackNavigator } from 'react-navigation';

import Login from './screens/login';

const App = createStackNavigator({
  Login: { screen: Login }
})

export default App
