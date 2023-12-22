import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Text } from '../components/common'

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text level="5" strong centered>
        COZO FUTBOL
      </Text>
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
