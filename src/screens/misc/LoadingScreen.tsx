import React, { memo } from 'react'
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native'

const LoadingScreen = ({ loading }: { loading: boolean }) => {
  console.log('render LoadingScreen')
  return (
    <Modal transparent={true} visible={loading}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26262666',
  },
})

export default memo(LoadingScreen)
