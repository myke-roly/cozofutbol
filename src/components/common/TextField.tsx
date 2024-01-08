import React, { forwardRef, memo } from 'react'
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { Color } from '../../constants'

type TextFieldProps = {
  value: string
  onChange: (value: string) => void
  placeholder: string
  label: string
  type?: KeyboardTypeOptions
}

const TextField = forwardRef<TextInput, TextFieldProps>(
  (
    {
      placeholder,
      onChange,
      value,
      label,
      type = 'default',
      ...props
    }: TextFieldProps,
    ref,
  ) => {
    return (
      <View>
        <Text>{label}</Text>
        <TextInput
          ref={ref}
          style={styles.input}
          placeholder={placeholder}
          keyboardType={type}
          value={value}
          onChangeText={onChange}
          autoCapitalize="none"
          {...props}
        />
      </View>
    )
  },
)

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    borderRadius: 8,
    color: Color.BLACK,
  },
})

export default memo(TextField)
