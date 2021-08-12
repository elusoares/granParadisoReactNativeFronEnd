import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/app/home/home';
import Cart from './src/app/cart/cart';

const Tabs = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Tabs.Navigator
        initialRouteName="Início"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            size = 40;

            if (route.name === 'Início') {
              iconName = 'pizza';
            } else if (route.name === 'Sacola') {
              iconName = 'basket';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#330404',
          tabBarInactiveTintColor: '#C2A3A3',
          style: {
            height: 500,
            backgroundColor: '#fff',
            fontSize: 30,
          },
          labelStyle: {
            fontSize: 30,
          },
        })}
      >
        <Tabs.Screen
          name="Início"
          component={Home}
        />
        <Tabs.Screen
          name="Sacola"
          component={Cart}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
export default App;

