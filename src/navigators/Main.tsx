import React from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import TermDetailPage from '../screens/TermDetailPage';
import TermsPage from '../screens/TermsPage/TermsPage';

export type MainStackParamList = {
  Home: undefined;
  TermsPage: undefined;
  TermDetailPage: {
    termId: number;
  };
};

const Stack = createStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 600,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 600,
            },
          },
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TermsPage" component={TermsPage} />
      <Stack.Screen name="TermDetailPage" component={TermDetailPage} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
