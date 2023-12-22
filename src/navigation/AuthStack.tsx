import React from 'react'
import { LoginScreen, RegisterScreen } from '../screens'
import { AuthScreen } from './enum/screen'
import { createStackNavigator } from '@react-navigation/stack'
import MainTabs from './MainTabs'

export type RootStackParamList = {
  LOGIN: undefined
  REGISTER: undefined
  HOME: undefined
  MAIN: undefined
}

const RootStack = createStackNavigator<RootStackParamList>()

const AuthStack = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={AuthScreen.LOGIN} component={LoginScreen} />
      <RootStack.Screen name={AuthScreen.REGISTER} component={RegisterScreen} />
      <RootStack.Screen name="MAIN" component={MainTabs} />
    </RootStack.Navigator>
  )
}

export default AuthStack
