import React, { memo } from 'react'
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native'
import { Color } from '../../constants'

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
    backgroundColor: Color.GRAY,
  },
})

export default memo(LoadingScreen)
