import React, { forwardRef, memo } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import { Color, FontSize } from '../../constants'

export type TextFieldProps = {
  onChange: (value: string) => void
  divider?: boolean
} & Omit<TextInputProps, 'onChange'>

const TextField = forwardRef<TextInput, TextFieldProps>(
  (
    {
      divider,
      onChange,
      keyboardType = 'default',
      autoCapitalize = 'none',
      ...props
    }: TextFieldProps,
    ref,
  ) => {
    console.log(
      'render TextField',
      //typeof ref === 'function' ? ref(null) : ref?.current,
    )
    return (
      <TextInput
        ref={ref}
        style={[styles.input, divider && styles.divider]}
        placeholderTextColor={Color.GRAY}
        keyboardType={keyboardType}
        onChangeText={onChange}
        autoCapitalize={autoCapitalize}
        {...props}
      />
    )
  },
)

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: FontSize.MEDIUM,
    fontWeight: '500',
    color: Color.BLACK,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Color.GRAY,
  },
})

export default memo(TextField)
