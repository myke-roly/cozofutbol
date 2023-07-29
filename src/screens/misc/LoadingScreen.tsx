import React from 'react'
import { ActivityIndicator, Modal, View } from 'react-native'

const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <Modal transparent={true} visible={isLoading}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#26262666',
        }}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    </Modal>
  )
}
export default LoadingScreen
