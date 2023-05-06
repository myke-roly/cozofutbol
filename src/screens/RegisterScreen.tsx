import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a Cozo Futbol</Text>
      <Text>
        Únete a la comunidad futbolera y juega sin límites de nivel con la app
        de Cozo Futbol
      </Text>
      <TextInput
        value=""
        keyboardType="email-address"
        placeholder="Ingresa tu email"
      />
      <TextInput value="sds" placeholder="Ingresa un contraseña" />
      <TextInput value="" placeholder="Repetí tu contraseña" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default RegisterScreen
