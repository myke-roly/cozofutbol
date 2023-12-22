import React, { FC, useState } from 'react'
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
import { RootStackParamList } from '../navigation/AuthStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import firebase from '../helpers/firebase'
import { LoadingScreen } from './misc'

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  AuthScreen.LOGIN
>

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('mykeroly@gmail.com')
  const [password, setPassword] = useState('555111444')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Ingresá tu email y contraseña')

      return
    }
    setLoading(true)

    await firebase
      .login(email, password)
      .then(() => {
        setError('')
        navigation.replace(AuthScreen.MAIN)
      })
      .catch(err => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <LoadingScreen loading={loading} />
        <View>
          <Image
            style={styles.imageHeader}
            source={{
              uri: 'https://images.vexels.com/media/users/3/146850/isolated/preview/b314541f49ce483dd4c47d0142a47f77-icono-de-pelota-de-ftbol-cl-sico.png',
              cache: 'force-cache',
            }}
          />
          <Text level="5" strong centered>
            Iniciar Sesión
          </Text>
          <Text level="3" centered>
            ¿Listo para jugar? Inicia sesión en Cozo Futbol y descubre todo lo
            que tenemos para ofrecerte. No importa tu nivel, ¡aquí todos son
            bienvenidos!.
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
          placeholder="Ingresa un contraseña"
          label="Contraseña"
          onChange={setPassword}
        />
        <Text level="2">{!!error && error}</Text>

        <Button title="Iniciar Sesión" onPress={handleLogin} />
        <Button
          title="¿No tienes cuenta? Regístrate"
          onPress={() => navigation.navigate(AuthScreen.REGISTER)}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageHeader: {
    alignSelf: 'center',
    marginVertical: 24,
    width: 100,
    height: 100,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
})

export default LoginScreen
