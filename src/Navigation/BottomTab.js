import React, {useContext, useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Alert, Image, StyleSheet} from 'react-native';
import Bookmarked from '../Screens/Dashboard/Bookmarked';
import {colors, fonts} from '../Constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



import links from '../Constants/images';
import GlobalHeadline from '../Screens/Dashboard/GlobalHeadline';
import Feeds from '../Screens/Dashboard/Feeds';
import Setting from '../Screens/Dashboard/Setting';
import Newsfeed from '../Screens/Dashboard/Newsfeed';

const Tab = createBottomTabNavigator();

const BottomTab = navigation => {



  return (
    <Tab.Navigator
      initialRouteName={Bookmarked}
      
      
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarAllowFontScaling: false,
        tabBarStyle: {paddingBottom: 5},
        tabBarActiveTintColor: '#000',
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      }}>
      <Tab.Screen
        name="FEED"
        component={Newsfeed}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
        
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? colors.red : colors.grey,
              }}
              resizeMode='contain'
              source={links.dashboard}
            />
          ),
        })}
      />
     
     <Tab.Screen
        name="GLOBAL"
        component={GlobalHeadline}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
        
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? colors.red : colors.grey,
              }}
              resizeMode='contain'
              source={links.global}
            />
          ),
        })}
      />
      <Tab.Screen
        name="BOOKMARK"
        component={Bookmarked}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
        
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? colors.red : colors.grey,
              }}
              resizeMode='contain'
              source={links.bookmark}
            />
          ),
        })}
      />
      <Tab.Screen
        name="SETTING"
        component={Setting}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
        
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? colors.red : colors.grey,
              }}
              resizeMode='contain'
              source={links.setting}
            />
          ),
        })}
      />
    </Tab.Navigator>
        
  );
};

export default BottomTab;
const styles = StyleSheet.create({
  tabImg2: {
    alignSelf: 'center',
    tintColor: 'grey',
    height: 25,
    width: 30,
  },
  selectedTabImg2: {
    alignSelf: 'center',
    tintColor: 'black',
    height: 25,
    width: 30,
  },
});
