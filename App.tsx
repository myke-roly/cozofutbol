import React from 'react'
import 'react-native-gesture-handler'

import { onlineManager } from '@tanstack/react-query'
import NetInfo from '@react-native-community/netinfo'
import { Splash } from './src/screens'

/**
 * @TODO Create a component to show status info online
 */

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected)
  })
})

function App(): JSX.Element {
  return <Splash />
}

export default App
