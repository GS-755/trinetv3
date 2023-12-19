import { Home } from './src/layout/Home';
import { History } from './src/layout/History';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="ĐỔI TỐC ĐỘ MẠNG" component={Home}></Tabs.Screen>
        <Tabs.Screen name="LỊCH SỬ TÍNH TOÁN" component={History}></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;