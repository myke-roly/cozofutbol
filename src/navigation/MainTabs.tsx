import React from 'react'
import { Button, View } from 'react-native'
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { Text } from '../components/common'

export type MainTabParamList = {
  HOME: {
    onLogout: () => void
  }
  SETTINGS: undefined
}

type HomeScreenProps = BottomTabScreenProps<MainTabParamList, 'HOME'>

const HomeScreen = ({ route }: HomeScreenProps) => {
  const { onLogout } = route.params

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button title="Cerrar sesión" onPress={onLogout} />
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

const MainTabs = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <Tab.Navigator initialRouteName={'HOME'}>
      <Tab.Screen
        name="HOME"
        initialParams={{ onLogout }}
        component={HomeScreen}
      />
      <Tab.Screen name="SETTINGS" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default MainTabs
