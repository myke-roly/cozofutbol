import React from 'react'
import { View } from 'react-native'
import { Text } from '../../components/common'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { MainTabParamList } from '../../navigation/MainTabs'
import { MainScreen } from '../../navigation/enum/screen'

type SettingsScreenProps = BottomTabScreenProps<
  MainTabParamList,
  MainScreen.SETTINGS
>

const SettingsScreen = ({}: SettingsScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

export default SettingsScreen
