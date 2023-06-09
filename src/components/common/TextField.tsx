import React from 'react'
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

type TextFieldProps = {
  value: string
  onChange: (value: string) => void
  placeholder: string
  label: string
  type?: KeyboardTypeOptions
}

const TextField = ({
  placeholder,
  onChange,
  value,
  label,
  type = 'default',
  ...props
}: TextFieldProps) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
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
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    borderRadius: 8,
  },
})

export default TextField
