import React, { FC, useCallback, useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Text } from '../components/common'
import { AuthScreen } from '../navigation/enum/screen'
import { RootStackParamList } from '../navigation/AuthStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import firebase from '../helpers/firebase'
import { LoadingScreen } from './misc'
import { FieldsLayout } from '../components/layout'

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  AuthScreen.LOGIN
>

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('mykeroly@gmail.com')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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
    <FieldsLayout
      error={error}
      fields={[
        {
          value: email,
          keyboardType: 'email-address',
          placeholder: 'Ingresa tu email',
          onChange: setEmail,
        },
        {
          value: password,
          placeholder: 'Ingresa un contraseña',
          onChange: setPassword,
          secureTextEntry: true,
        },
      ]}
      primaryButton={{
        title: 'Iniciar sesión',
        onPress: handleLogin,
      }}
      secondaryButton={{
        title: '¿No tienes cuenta? Regístrate',
        onPress: handleSingUp,
      }}>
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
          ¿Listo para jugar? Inicia sesión en Cozo Futbol y descubre todo lo que
          tenemos para ofrecerte. No importa tu nivel, ¡aquí todos son
          bienvenidos!
        </Text>
      </View>
    </FieldsLayout>
  )
}

const styles = StyleSheet.create({
  imageHeader: {
    alignSelf: 'center',
    marginVertical: 24,
    width: 80,
    height: 80,
  },
})

export default LoginScreen
