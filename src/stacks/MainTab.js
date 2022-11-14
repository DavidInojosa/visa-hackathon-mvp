import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/TabBar';

import Home from '../screens/Dashboard/Home';
import Concierge from '../screens/Dashboard/Concierge';
import VISAPAY from '../screens/Dashboard/VISAPAY';
import Configuration from '../screens/Dashboard/Configuration';
import Travel from '../screens/Dashboard/Travel';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    tabBar={(props) => <CustomTabBar {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Tab.Screen name="VISAPAY" component={VISAPAY} />
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Concierge" component={Concierge} />
    <Tab.Screen name="Travel" component={Travel} />
    <Tab.Screen name="Configuration" component={Configuration} />
  </Tab.Navigator>
);
