import React, { FC, useLayoutEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import {
  TextField,
  Text,
  KeyboardAvoidingComponent,
} from '../components/common'
import { AuthScreen } from '../navigation/enum/screen'
import { RootStackParamList } from '../navigation/AuthStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import firebase from '../helpers/firebase'
import { LoadingScreen } from './misc'
import { Button } from '../components/ui'
import { TextInput } from 'react-native-gesture-handler'

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  AuthScreen.LOGIN
>

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
  const inputRef = React.useRef<TextInput>(null)
  const [email, setEmail] = useState('mykeroly@gmail.com')
  const [password, setPassword] = useState('555111444')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useLayoutEffect(() => {
    inputRef.current?.focus()
  }, [])

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
    <KeyboardAvoidingComponent>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.contentContainer}>
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
            bienvenidos!
          </Text>
        </View>

        <TextField
          value={email}
          type="email-address"
          placeholder="Ingresa tu email"
          label="Email"
          onChange={setEmail}
          ref={inputRef}
        />
        <TextField
          value={password}
          placeholder="Ingresa un contraseña"
          label="Contraseña"
          onChange={setPassword}
          ref={inputRef}
        />

        <Text style={{ color: 'red', paddingVertical: 8 }} level="2">
          {!!error && error}
        </Text>

        <Button title="Iniciar sesión" onPress={handleLogin} />
        <Button
          title="¿No tienes cuenta? Regístrate"
          variant="text"
          onPress={() => navigation.navigate(AuthScreen.REGISTER)}
        />
      </ScrollView>
    </KeyboardAvoidingComponent>
  )
}

const styles = StyleSheet.create({
  imageHeader: {
    alignSelf: 'center',
    marginVertical: 24,
    width: 100,
    height: 100,
  },
  contentContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
})

export default LoginScreen
