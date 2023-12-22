import React, { useState } from 'react'
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import { TextField, Text } from '../components/common'
import { AuthScreen } from '../navigation/enum/screen'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/AuthStack'
import firebase from '../helpers/firebase'

type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  AuthScreen.REGISTER
>

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleCreateAccount = async () => {
    try {
      const data = await firebase.createAccount(email, password)
      console.log(data)
    } catch (error) {
      console.error(error)
      // manage error
    }
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Image
            source={{
              uri: 'https://images.vexels.com/media/users/3/146850/isolated/preview/b314541f49ce483dd4c47d0142a47f77-icono-de-pelota-de-ftbol-cl-sico.png',
              width: 100,
              height: 100,
              cache: 'only-if-cached',
            }}
            style={{ alignSelf: 'center', marginVertical: 24 }}
          />
          <Text level="5" centered strong>
            Bienvenido a Cozo Futbol
          </Text>
          <Text centered>
            Únete a la comunidad futbolera y juega sin límites de nivel con la
            app de Cozo Futbol.
          </Text>
          <TextField
            value={email}
            type="email-address"
            placeholder="Ingresa tu email"
            label="Email"
            onChange={setEmail}
          />
          <TextField
            value={password}
            placeholder="Ingresa tu contraseña"
            label="Contraseña"
            onChange={setPassword}
          />
          <TextField
            value=""
            placeholder="Repetí tu contraseña"
            label="Confirmar contraseña"
            onChange={() => {}}
          />
          <Button title="Registrarme" onPress={handleCreateAccount} />
          <Button
            title="¿Ya tienes cuenta? Inicia sesión"
            onPress={() => navigation.navigate(AuthScreen.LOGIN)}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 24,
  },
  content: {
    flex: 1,
  },
})

export default RegisterScreen
