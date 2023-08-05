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

  function getLanguageFromDevice() {
    const language = 'es'
    return language
  }

  const implementI18n = () => {
    const en = {
      hello: 'Hello',
      world: 'World',
    }

    const es = {
      hello: 'Hola',
      world: 'Mundo',
    }

    const i18n = {
      en,
      es,
    }

    const lang = 'es'

    console.log(i18n[lang].hello)
  }

  async function handleLogout() {
    await firebase.logout()
    setToken(null)
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
