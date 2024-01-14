import React, { memo, useCallback, useMemo, useRef } from 'react'
import {
  ButtonProps as RNButtonProps,
  StyleSheet,
  Text,
  Pressable,
  ViewProps,
  Animated,
} from 'react-native'
import { Color } from '../../constants'

export type ButtonProps = {
  style?: ViewProps['style']
  variant?: 'primary' | 'outline' | 'text'
} & RNButtonProps

const Button = ({
  title,
  onPress,
  style,
  variant,
  disabled,
  ...props
}: ButtonProps) => {
  const animatedOpacity = useRef(new Animated.Value(1)).current

  const isOutline = variant === 'outline'
  const isText = variant === 'text'

  const buttonStyle = useMemo(
    () =>
      StyleSheet.flatten([
        styles.button,
        isOutline && outlineStyles.button,
        isText && textStyles.button,
        style,
      ]),
    [isOutline, isText, style],
  )

  const textStyle = useMemo(
    () =>
      StyleSheet.flatten([
        styles.text,
        isOutline && outlineStyles.text,
        isText && textStyles.text,
      ]),
    [isOutline, isText],
  )

  const handleOnPressIn = useCallback(() => {
    Animated.timing(animatedOpacity, {
      toValue: 0.98,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }, [animatedOpacity, disabled])

  const handleOnPressOut = useCallback(() => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }, [animatedOpacity, disabled])

  const animatedStyles = useMemo(
    () => ({
      opacity: animatedOpacity,
      transform: [
        {
          scale: animatedOpacity,
        },
      ],
    }),
    [animatedOpacity],
  )

  console.log('Render button with title: ', title)

  return (
    <Pressable
      {...props}
      disabled={disabled}
      onPress={onPress}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      testID="btn-presable-view">
      <Animated.View style={[buttonStyle, animatedStyles]}>
        <Text style={textStyle}>{title}</Text>
      </Animated.View>
    </Pressable>
  )
}

Button.name = 'Button'

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: Color.BLACK,
    paddingVertical: 16,
    paddingHorizontal: 8,
    shadowColor: Color.BLACK,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    elevation: 5,
  },
  text: {
    color: Color.WHITE,
    fontSize: 16,
  },
})

const outlineStyles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderColor: Color.BLACK,
    elevation: 0,
  },
  text: {
    color: Color.BLACK,
  },
})

const textStyles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    elevation: 0,
  },
  text: {
    color: Color.BLACK,
  },
})

export default memo(Button)
