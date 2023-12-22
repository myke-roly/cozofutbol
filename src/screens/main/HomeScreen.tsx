import React from 'react'
import {
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from 'react-native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import firebase from '../../helpers/firebase'
import { MainTabParamList } from '../../navigation/MainTabs'
import { MainScreen } from '../../navigation/enum/screen'

type HomeScreenProps = BottomTabScreenProps<MainTabParamList, MainScreen.HOME>

const HomeScreen = ({}: HomeScreenProps) => {
  console.log(firebase?.user)

  return (
    <SafeAreaView style={styles.conatiner}>
      <ScrollView style={styles.content}>
        <TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: '#ffffff',
              padding: 10,
              width: 100,
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text>{firebase.user?.email?.split('@', 1)}</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: '#ffffff',
              padding: 10,
              marginTop: 24,
              borderRadius: 10,
            }}>
            <Text>Próximo partido</Text>
            <Image
              source={{
                uri: 'https://media.lmneuquen.com/p/f82a5bddc22c5816179be6e2f0be7ac7/adjuntos/195/imagenes/006/509/0006509412/1200x675/smart/cancha-futbol-5jpg.jpg',
                width: 100,
                height: 100,
              }}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: '#ffffff',
              padding: 10,
              marginVertical: 24,
              borderRadius: 10,
            }}>
            <Text>Próximo partido</Text>
            <Image
              source={{
                uri: 'https://media.lmneuquen.com/p/f82a5bddc22c5816179be6e2f0be7ac7/adjuntos/195/imagenes/006/509/0006509412/1200x675/smart/cancha-futbol-5jpg.jpg',
                width: 100,
                height: 100,
              }}
            />
          </View>
        </TouchableWithoutFeedback>

        {[{ id: 1 }, { id: 2 }].map(item => (
          <TouchableWithoutFeedback onPress={() => console.log(item)}>
            <View>
              <Text>title</Text>
              <Text>Description</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
        <Button title="Cerrar sesión" onPress={firebase.logout} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#efefef',
    flex: 1,
  },
  content: {
    padding: 20,
  },
})

export default HomeScreen
