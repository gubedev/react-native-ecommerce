import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { scale } from 'react-native-size-matters';
import ShopStackNavigation from './shop';
import CartStackNavigation from './cart';
import Feather from 'react-native-vector-icons/dist/Feather';
import { COLORS } from 'utils/constants/colors';

const BottomTabs = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="Shop"
        screenOptions={{
          headerShown: false,
        }}>
        <BottomTabs.Screen
          name="Shop"
          component={ShopStackNavigation}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={'mouse-pointer'}
                size={scale(20)}
                color={COLORS.primary}
              />
            ),
            tabBarLabelStyle: {
              fontSize: scale(12),
              textTransform: 'uppercase',
              color: `${COLORS.black}`,
            },
          }}
        />
        <BottomTabs.Screen
          name="Cart"
          component={CartStackNavigation}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={'shopping-cart'}
                size={scale(20)}
                color={COLORS.primary}
              />
            ),
            tabBarLabelStyle: {
              fontSize: scale(12),
              textTransform: 'uppercase',
              color: `${COLORS.black}`,
            },
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
