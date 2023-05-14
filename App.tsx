import React, { useEffect, useState } from 'react'
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { AuthStack, MainTabs } from './src/navigation'
import { onlineManager } from '@tanstack/react-query'
import NetInfo from '@react-native-community/netinfo'
import { Splash } from './src/screens'

/**
 * @description Create a component to show status info online
 */

let isAuth = false

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected)
  })
})

function App(): JSX.Element {
  return <Splash isAuth={isAuth} />
}

export default App
