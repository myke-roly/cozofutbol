import React from 'react'

import { Splash } from './src/screens'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './src/navigation/MainStack'

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Splash />
      <MainStack />
    </NavigationContainer>
  )
}

export default App
