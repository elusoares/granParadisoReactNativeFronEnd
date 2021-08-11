import 'react-native-gesture-handler';
import React from 'react';
// import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from 'react-navigation';
import Home from './src/app/home/home';
import ShoppingCart from './src/app/shopping-cart/shopping-cart';

// const Stack = createStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="home">
//       <Stack.screen
//         name="Home"
//         component={Home}
//         options={{ title: 'Home' }}
//       />
//     </Stack.Navigator>
//   );
// };
// const ShoppingCartStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="shopping-cart">
//       <Stack.screen
//         name="Shopping Cart"
//         component={ShoppingCart}
//         options={{ title: 'Shopping Cart' }}
//       />
//     </Stack.Navigator>
//   );
// };
// const Tabs = createBottomTabNavigator();

// const TabsStack = () => {
//   return (
//     <Tabs.Navigator initialRouteName="home">
//       <Tabs.Screen
//         name="HomeStack"
//         component={HomeStack}
//         options={{ tabBarLabel: 'Home' }}
//       />
//       <Tabs.Screen
//         name="ShoppingCartStack"
//         component={ShoppingCartStack}
//         options={{ tabBarLabel: 'Shopping Cart' }}
//       />
//     </Tabs.Navigator>
//   );
// };

// const Container = createAppContainer(TabsStack);

const Tabs = createBottomTabNavigator(
  {
    Home: Home,
    ShoppingCart: ShoppingCart,
  }
);
// const TabsNavigator = () => {
//   return (
//     <Tabs.Navigator initialRouteName="home">
//       <Tabs.Screen name="Home" component={Home} />
//       <Tabs.Screen name="ShoppingCart" component={ShoppingCart} />
//     </Tabs.Navigator>
//   );
// };
const Container = createAppContainer(Tabs);
const App = () => {
  return (
    <Container/>
  );
};
export default App;

