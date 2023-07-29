import React from 'react'
import { LoginScreen, RegisterScreen } from '../screens'
import { Screen } from './enum/screen'
import { createStackNavigator } from '@react-navigation/stack'

export type RootStackParamList = {
  LOGIN: undefined
  REGISTER: undefined
  HOME: {
    onLogout: () => void
  }
}

const RootStack = createStackNavigator<RootStackParamList>()

const AuthStack = () => {
  return (
    <RootStack.Navigator>
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
