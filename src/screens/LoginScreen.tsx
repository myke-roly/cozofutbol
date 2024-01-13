import React, { FC, useCallback, useLayoutEffect, useState } from 'react'
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
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef.current?.focus])

  const handleLogin = useCallback(async () => {
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
  }, [email, password, navigation])

  const handleSingUp = useCallback(() => {
    navigation.navigate(AuthScreen.REGISTER)
  }, [navigation])

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
          onChange={setEmail}
          ref={inputRef}
        />
        <TextField
          value={password}
          placeholder="Ingresa un contraseña"
          onChange={setPassword}
          ref={inputRef}
        />

        <Text style={{ color: 'red', paddingVertical: 8 }} level="2">
          {!!error && error}
        </Text>

        <Button
          title={loading ? 'loading...' : 'Iniciar sesión'}
          onPress={handleLogin}
        />
        <Button
          title="¿No tienes cuenta? Regístrate"
          variant="text"
          onPress={handleSingUp}
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
