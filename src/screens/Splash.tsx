import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Text } from '../components/common'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import { AuthStack, MainTabs } from '../navigation'
import firebase from '../helpers/firebase'

const Splash = () => {
  const [isLoading, setLoading] = useState(true)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    if (firebase.isLoggedIn) {
      setToken('firebase token')
    }

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  async function handleLogout() {
    try {
      await firebase.logout()
    } catch (error) {
      console.error(error)
    }
  }

  const theme = useTheme()

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text level="5" strong centered>
          COZO FUTBOL
        </Text>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <NavigationContainer
      theme={theme}
      onReady={() => console.log('app is ready')}>
      {token ? <MainTabs onLogout={handleLogout} /> : <AuthStack />}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Splash
