import React, { FC, useState } from 'react'
import {
  ActivityIndicator,
  Button,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import { TextField } from '../components/common'
import { Screen } from '../navigation/enum/screen'
import { RootStackParamList } from '../navigation/MainStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Text from '../components/common/Text'

const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <Modal transparent={true} visible={isLoading}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#26262666',
        }}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    </Modal>
  )
}

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, Screen.LOGIN>

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Image
            source={{
              uri: 'https://images.vexels.com/media/users/3/146850/isolated/preview/b314541f49ce483dd4c47d0142a47f77-icono-de-pelota-de-ftbol-cl-sico.png',
              width: 150,
              height: 150,
              cache: 'force-cache',
            }}
            style={{ alignSelf: 'center', marginVertical: 24 }}
          />
          <Text level="5" strong centered>
            Iniciar Sesión
          </Text>
          <Text centered>
            ¿Listo para jugar? Inicia sesión en Cozo Futbol y descubre todo lo
            que tenemos para ofrecerte. No importa tu nivel, ¡aquí todos son
            bienvenidos!.
          </Text>
          <View style={{ flex: 1 }} />
          <Text>{email}</Text>
          <Text>{password}</Text>
          <TextField
            value={email}
            type="email-address"
            placeholder="Ingresa tu email"
            label="Email"
            onChange={text => setEmail(text)}
          />
          <TextField
            value={password}
            placeholder="Ingresa un contraseña"
            label="Contraseña"
            onChange={text => setPassword(text)}
          />
          <Button title="Iniciar Sesión" onPress={() => {}} />
          <Button
            title="Ya tengo una cuenta!"
            onPress={() => navigation.navigate(Screen.REGISTER)}
          />
        </ScrollView>
        <LoadingScreen isLoading={false} />
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

export default LoginScreen
