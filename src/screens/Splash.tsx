import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Text } from '../components/common'
import { NavigationContainer } from '@react-navigation/native'
import { AuthStack, MainTabs } from '../navigation'
import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
} from '../storage/storage'
import { StorageItemType } from '../storage/enum'

const Splash = () => {
  const [isLoading, setLoading] = useState(true)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const isLoggedIn = async () => {
      setLoading(true)
      try {
        const data = await getStorageItem(StorageItemType.TOKEN)
        setToken(data)
        console.log(data)
        setLoading(false)
      } catch (err) {
        setLoading(false)
        console.error(err)
      }
    }

    setTimeout(() => {
      isLoggedIn()
    }, 1000)
  }, [])

  async function handleLogin() {
    await setStorageItem(StorageItemType.TOKEN, 'token jwt')
    setToken('token jwt')
  }

  async function handleLogout() {
    await removeStorageItem(StorageItemType.TOKEN)
    setToken(null)
  }

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
      onReady={() => {
        console.log('app is ready')
      }}>
      {!!token ? (
        <MainTabs onLogout={handleLogout} />
      ) : (
        <AuthStack onLogin={handleLogin} />
      )}
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
