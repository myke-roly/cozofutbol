import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import firebase from '../../helpers/firebase'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { MainTabParamList } from '../../navigation/MainTabs'
import { MainScreen } from '../../navigation/enum/screen'

type HomeScreenProps = BottomTabScreenProps<MainTabParamList, MainScreen.HOME>

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <View style={styles.conatiner}>
      <Text>Home!</Text>
      <Button title="Cerrar sesión" onPress={firebase.logout} />
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})

export default HomeScreen
