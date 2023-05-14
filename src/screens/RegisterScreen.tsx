import React from 'react'
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
import { Screen } from '../navigation/enum/screen'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/AuthStack'

type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screen.REGISTER
>

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Image
            source={{
              uri: 'https://images.vexels.com/media/users/3/234531/isolated/lists/086485ed507e0da80d18343375019a4b-hombre-jugar-al-futbol-recorte.png',
              width: 150,
              height: 150,
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
          <View style={{ flex: 1 }} />
          <TextField
            value=""
            type="email-address"
            placeholder="Ingresa tu email"
            label="Email"
            onChange={() => {}}
          />
          <TextField
            value=""
            placeholder="Ingresa un contraseña"
            label="Contraseña"
            onChange={() => {}}
          />
          <TextField
            value=""
            placeholder="Repetí tu contraseña"
            label="Confirmar contraseña"
            onChange={() => {}}
          />
          <Button title="Crear cuenta" onPress={() => {}} />
          <Button
            title="Iniciar Sesión"
            onPress={() => navigation.navigate(Screen.LOGIN)}
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
