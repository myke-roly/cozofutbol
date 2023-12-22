import React from 'react'
import { Button, View } from 'react-native'
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { Text } from '../components/common'
import firebase from '../helpers/firebase'

export type MainTabParamList = {
  HOME: {
    onLogout: () => void
  }
  SETTINGS: undefined
}

// type HomeScreenProps = BottomTabScreenProps<MainTabParamList, 'HOME'>

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button title="Cerrar sesión" onPress={firebase.logout} />
    </View>
  )
}

type SettingsScreenProps = BottomTabScreenProps<MainTabParamList, 'SETTINGS'>
const SettingsScreen = ({}: SettingsScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator<MainTabParamList>()

const MainTabs = () => {
  return (
    <Tab.Navigator initialRouteName={'HOME'}>
      <Tab.Screen name="HOME" component={HomeScreen} />
      <Tab.Screen name="SETTINGS" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default MainTabs
