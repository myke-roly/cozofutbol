import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Screen } from '../navigation/enum/screen'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/MainStack'

type SplashProps = NativeStackScreenProps<RootStackParamList, 'SPLASH'>

const Splash = ({ navigation }: SplashProps) => {
  const isAuth = false

  useEffect(() => {
    const redirect = () => {
      setTimeout(() => {
        if (isAuth) {
          navigation.navigate(Screen.LOGIN)
        } else {
          navigation.navigate(Screen.REGISTER)
        }
      }, 2000)
    }

    return () => redirect()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Splash</Text>
      <ActivityIndicator />
    </View>
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
