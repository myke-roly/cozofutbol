import React, { forwardRef, memo } from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native'
import { Color, FontSize } from '../../constants'

type TextFieldProps = {
  value: string
  onChange: (value: string) => void
  placeholder: string
  type?: KeyboardTypeOptions
  divider?: boolean
}

const TextField = forwardRef<TextInput, TextFieldProps>(
  (
    {
      placeholder,
      divider,
      onChange,
      value = '',
      type = 'default',
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
        placeholder={placeholder}
        placeholderTextColor={Color.GRAY}
        keyboardType={type}
        value={value}
        onChangeText={onChange}
        autoCapitalize="none"
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
