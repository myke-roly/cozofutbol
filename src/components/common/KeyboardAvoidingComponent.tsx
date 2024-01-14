import React, { useState } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  KeyboardAvoidingViewProps,
  StyleSheet,
} from 'react-native'

const windowHeight = Dimensions.get('window').height

// TODO: CREATE DINAMIC SCROLL VIEW TO SET HEIGHT ON KEYBOARD OPEN AND CLOSE

const KeyboardAvoidingComponent = ({
  keyboardVerticalOffset = 0,
  children,
  ...props
}: KeyboardAvoidingViewProps) => {
  const [verticalOffset, setVerticalOffset] = useState<number | undefined>(
    keyboardVerticalOffset,
  )

  console.log('render KeyboardAvoidingComponent', verticalOffset)

  return (
    <View
      style={styles.container}
      testID="keyboard-avoiding-view"
      onLayout={({ nativeEvent: { layout } }) =>
        setVerticalOffset(windowHeight - layout.height)
      }>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({ ios: 'padding' })}
        keyboardVerticalOffset={verticalOffset}
        {...props}>
        {children}
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
})

export default KeyboardAvoidingComponent
