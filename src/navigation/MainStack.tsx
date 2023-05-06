import React from 'react'
import { LoginScreen, RegisterScreen, Splash } from '../screens'
import { Screen } from './enum/screen'
import { createStackNavigator } from '@react-navigation/stack'

export type RootStackParamList = {
  SPLASH: undefined
  LOGIN: undefined
  REGISTER: undefined
}

const RootStack = createStackNavigator<RootStackParamList>()

const MainStack = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name={Screen.LOGIN} component={LoginScreen} />
      <RootStack.Screen name={Screen.REGISTER} component={RegisterScreen} />
    </RootStack.Navigator>
  )
}

export default MainStack
