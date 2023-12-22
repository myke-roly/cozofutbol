import React, { useEffect } from 'react'
import 'react-native-gesture-handler'

import { onlineManager } from '@tanstack/react-query'
import NetInfo from '@react-native-community/netinfo'
import { Splash } from './src/screens'
import firebase from './src/helpers/firebase'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import { AuthStack, MainTabs } from './src/navigation'

/**
 * @TODO Create a component to show status info online
 */

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected)
  })
})

firebase.firebaseInit()

function App(): JSX.Element {
  const theme = useTheme()
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  if (loading) {
    return <Splash />
  }

  return (
    <NavigationContainer
      theme={theme}
      onReady={() => console.log('Cozo fútbol APP is already start!!')}>
      {firebase.isLoggedIn ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default App
