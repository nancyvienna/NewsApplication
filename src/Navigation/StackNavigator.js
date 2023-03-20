import * as React from 'react';
import {ref, useSnapshot} from 'valtio';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './RootNavigation';
import Splash from '../Screens/Dashboard/Splash';
import Feeds from '../Screens/Dashboard/Feeds';
import Bookmarked from '../Screens/Dashboard/Bookmarked';
import BottomTab from '../Navigation/BottomTab';
import GlobalHeadline from '../Screens/Dashboard/GlobalHeadline';
import Setting from '../Screens/Dashboard/Setting';
import Newsfeed from '../Screens/Dashboard/Newsfeed';
import Description from '../Screens/Dashboard/Description';


import state from '../Store';

import auth from '../State/auth';
const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  // const snap = useSnapshot(auth);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Splash">
        <Stack.Screen name="GlobalHeadline" component={GlobalHeadline} />
        <Stack.Screen name="Feeds" component={Feeds} />
        <Stack.Screen name="Bookmarked" component={Bookmarked} />
        <Stack.Screen name="Newsfeed" component={Newsfeed} />
        <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
        <Stack.Screen name="Setting" component={Setting}></Stack.Screen>
        <Stack.Screen name="BottomTab" component={BottomTab}></Stack.Screen>
        <Stack.Screen name="Description" component={Description}></Stack.Screen>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
