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
import { LoadingScreen } from './misc'

type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  AuthScreen.REGISTER
>

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleCreateAccount = async () => {
    if (!email || !password || password !== confirmPassword) {
      return setError('Debes completar todos los campos')
    }

    setLoading(true)
    setError('')

    await firebase
      .createAccount(email, password)
      .then(() => {
        setEmail('')
        navigation.navigate(AuthScreen.MAIN)
      })
      .catch(e => {
        setPassword('')
        setConfirmPassword('')
        setError(e.message)
      })
      .finally(() => {
        setPassword('')
        setConfirmPassword('')
        setLoading(false)
      })
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <LoadingScreen loading={loading} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <Image
            source={{
              uri: 'https://images.vexels.com/media/users/3/146850/isolated/preview/b314541f49ce483dd4c47d0142a47f77-icono-de-pelota-de-ftbol-cl-sico.png',
              width: 100,
              height: 100,
              cache: 'only-if-cached',
            }}
            style={styles.image}
          />
          <Text level="5" centered strong>
            Bienvenido a Cozo Futbol
          </Text>
          <Text centered>
            Únete a la comunidad futbolera y juega sin límites de nivel con la
            app de Cozo Futbol.
          </Text>
        </View>

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
          value={confirmPassword}
          placeholder="Repetí tu contraseña"
          label="Confirmar contraseña"
          onChange={setConfirmPassword}
        />

        {error && (
          <Text level="2" centered>
            {error}
          </Text>
        )}

        <Button title="Registrarme" onPress={handleCreateAccount} />
        <Button
          title="¿Ya tienes cuenta? Inicia sesión"
          onPress={() => navigation.navigate(AuthScreen.LOGIN)}
        />
      </ScrollView>
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
  image: {
    alignSelf: 'center',
    marginVertical: 24,
  },
})

export default RegisterScreen
