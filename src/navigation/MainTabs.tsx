import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, SettingsScreen } from '../screens'
import { MainScreen } from './enum/screen'

export type MainTabParamList = {
  HOME: undefined
  SETTINGS: undefined
  MAIN: undefined
}

const Tab = createBottomTabNavigator<MainTabParamList>()

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={MainScreen.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={MainScreen.HOME} component={HomeScreen} />
      <Tab.Screen name={MainScreen.SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default MainTabs
