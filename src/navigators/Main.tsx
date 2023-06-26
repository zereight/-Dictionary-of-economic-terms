import React from 'react';
import { Example, MyPage } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Example" component={Example} />
      <Stack.Screen name="MyPage" component={MyPage} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
