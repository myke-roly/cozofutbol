import React, { useState } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  KeyboardAvoidingViewProps,
} from 'react-native'

const windowHeight = Dimensions.get('window').height

// TODO: CREATE DINAMIC SCROLL VIEW TO SET HEIGHT ON KEYBOARD OPEN AND CLOSE

const KeyboardAvoidingComponent = ({
  keyboardVerticalOffset,
  ...props
}: KeyboardAvoidingViewProps) => {
  const [verticalOffset, setVerticalOffset] = useState<number | undefined>(
    keyboardVerticalOffset,
  )

  return (
    <View
      onLayout={({ nativeEvent: { layout } }) =>
        setVerticalOffset(windowHeight - layout.height)
      }>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding' })}
        keyboardVerticalOffset={verticalOffset}
        {...props}
      />
    </View>
  )
}

export default KeyboardAvoidingComponent
