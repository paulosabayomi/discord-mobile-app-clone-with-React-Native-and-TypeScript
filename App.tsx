/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StatusBar,
  useColorScheme,
  View, SafeAreaView
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/screens/HomeScreen';
import FriendsScreen from './components/screens/FriendsScreen';
// @ts-ignore
import DiscordLogo from './assets/discord-logo.svg'
// @ts-ignore
import FriendsLogo from './assets/friends.svg'
// @ts-ignore
import SearchLogo from './assets/discoverySearch.svg'
// @ts-ignore
import NotificationLogo from './assets/guildNotificationSettings.svg'
// @ts-ignore
import NewDMGroupLogo from './assets/iconNewGroupDM.svg'
// @ts-ignore
import InvitePersonIcon from './assets/guildInvitePeople-gray.svg'
// @ts-ignore
import Cellphone from './assets/guildMobileVerification.svg'
// @ts-ignore
import Dots from './assets/guildMoreOptions1.svg'

import { useAppDispatch, useAppSelector } from './shared/rdx-hooks';
import { FastImageRes } from './shared/Reusables';
import CustomTabBar from './components/CustomTabbar';
import useAppColor from './themed/useAppColor';
import { useIsFocused } from '@react-navigation/native';
import ProfileScreen from './components/screens/ProfileScreen';
import NotificationsScreen from './components/screens/NotificationsScreen';
import { TText } from './themed/themeComponents';
import { setAppColorMode, updateSafeAreaBg } from './shared/rdx-slice';
import storage from './shared/storage';
import { app_storage_key } from './shared/constants';

const Tab = createBottomTabNavigator();

const App = React.memo(():  React.JSX.Element => {
  const defaultAppMode = useColorScheme() || 'light';
  const safeAreaBg = useAppSelector(state => state.main.safeAreaBg);
  const colorMode = useAppColor();
  const appColorState = useAppSelector(state => state.main.appColorMode);
  const dispatch = useAppDispatch()

  const setAppModeFromStorage = React.useCallback(() => {
    storage.load({
      key: app_storage_key
    }).then(data => {
      dispatch(setAppColorMode(data.mode));
    }).catch(err => {
      dispatch(setAppColorMode(defaultAppMode));
    })
    dispatch(updateSafeAreaBg(colorMode.inverseWhiteLightGray))
    }, [])

  React.useLayoutEffect(() => {
    setAppModeFromStorage()
  }, []);


  return (
    <>
      <StatusBar
        barStyle={appColorState == 'dark' ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView style={{backgroundColor: safeAreaBg}}></SafeAreaView>
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />} screenOptions={{
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: colorMode.inverseWhiteLightGray
        },
        headerTitleStyle: {
          color: colorMode.inverseBlack
        }
      }}>
        <Tab.Screen name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon(props) {
                return <DiscordLogo width={25} height={25} />
            },
          headerShown: false
        }}
        />
        <Tab.Screen name="Friends" component={FriendsScreen}
          options={{
            tabBarIcon(props) {
                return <FriendsLogo width={25} height={25} />
            },
            headerRight(props) {
                return <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <NewDMGroupLogo style={{marginRight: 15}} width={30} height={30} />
                  <InvitePersonIcon style={{marginRight: 15}} width={25} height={25} />
                  <Cellphone style={{marginRight: 15}} width={25} height={25} />
                </View>
            },
          }} />
        <Tab.Screen name="Search" component={FriendsScreen}
          options={{
            tabBarIcon(props) {
                return <SearchLogo width={25} height={25} />
            },
          }} />
        <Tab.Screen name="Notification" component={NotificationsScreen}
          options={{
            tabBarIcon(props) {
                return <NotificationLogo width={25} height={25} />
            },
            headerRight(props) {
                return <View style={{flexDirection: 'row', alignItems: 'center', paddingRight: 10}}>
                  <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, backgroundColor: colorMode.appLightGray, paddingVertical: 3, borderRadius: 20}}>
                    <FriendsLogo width={25} height={25} />
                    <TText style={{marginLeft: 10}}>0</TText>
                  </View>
                  <View style={{marginLeft: 10}}>
                    <Dots width={25} height={25} />

                  </View>
                </View>
            },
          }} />
        <Tab.Screen name="Profile" component={ProfileScreen}
          options={{
            tabBarIcon(props) {
                return <View style={{width: 25, height: 25, borderRadius: 50, overflow: 'hidden'}}>
                  <FastImageRes uri='https://unsplash.it/400/400?image=1' />
                </View>
            },
            headerShown: false
          }} />
      </Tab.Navigator>
    </>
  );
})

export default App;
