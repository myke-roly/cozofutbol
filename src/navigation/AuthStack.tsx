import React from 'react'
import { LoginScreen, RegisterScreen, Splash } from '../screens'
import { Screen } from './enum/screen'
import { createStackNavigator } from '@react-navigation/stack'

export type RootStackParamList = {
  LOGIN: {
    onLogin: () => void
    other: string
  }
  REGISTER: undefined
  HOME: {
    onLogout: () => void
  }
}

const RootStack = createStackNavigator<RootStackParamList>()

const AuthStack = ({ onLogin }: { onLogin: () => void }) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{ headerShown: false }}
        name={Screen.LOGIN}
        component={LoginScreen}
        initialParams={{ onLogin, other: 'meeee' }}
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
