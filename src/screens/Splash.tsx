import React, { FC, useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Text } from '../components/common'
import { NavigationContainer } from '@react-navigation/native'
import { AuthStack, MainTabs } from '../navigation'

interface SplashProps {
  isAuth: boolean
}

const Splash = ({ isAuth }: SplashProps) => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  })

  if (isLoading)
    <View style={styles.container}>
      <Text level="5" strong centered>
        COZO FUTBOL
      </Text>
      <ActivityIndicator />
    </View>

  return (
    <NavigationContainer onReady={() => console.log('is on ready')}>
      {!isAuth ? <MainTabs /> : <AuthStack />}
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
