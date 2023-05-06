import React, { FC, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Screen } from '../navigation/enum/screen'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/MainStack'

type SplashProps = NativeStackScreenProps<RootStackParamList, Screen.SPLASH>

const Splash: FC<SplashProps> = ({ navigation }) => {
  const isAuth = false

  useEffect(() => {
    setTimeout(() => {
      if (isAuth) {
        navigation.replace(Screen.LOGIN)
      } else {
        navigation.replace(Screen.REGISTER)
      }
    }, 2000)
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
