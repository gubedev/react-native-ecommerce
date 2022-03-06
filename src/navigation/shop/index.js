import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from 'screens/categories';

const Stack = createNativeStackNavigator();

const ShopStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
};

export default ShopStackNavigation;
