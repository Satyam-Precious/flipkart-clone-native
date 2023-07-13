import React, {useRef} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UpperHeader from './components/UpperHeader';

import CategoryList from './components/CategoryList';

import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Products" component={ProductList} />
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
  );
};

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="Products" component={ProductList} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
