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

const AuthStack = () => {
  return (
    <RootStack.Navigator initialRouteName={Screen.SPLASH}>
      <RootStack.Screen
        name={Screen.SPLASH}
        component={Splash}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        options={{ headerShown: false }}
        name={Screen.LOGIN}
        component={LoginScreen}
      />
      <RootStack.Screen
        options={{ headerShown: false }}
        name={Screen.REGISTER}
        component={RegisterScreen}
      />
    </RootStack.Navigator>
  )
}

export default AuthStack
