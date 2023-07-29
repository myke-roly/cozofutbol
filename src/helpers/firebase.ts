import auth from '@react-native-firebase/auth'

const firebaseInit = async () => {
  console.info('start firebase...')
}

const isLoggedIn = !!auth().currentUser

const logout = () => {
  return auth().signOut()
}

const login = (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password)
}

const createAccount = (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password)
}

export default {
  isLoggedIn,
  firebaseInit,
  createAccount,
  login,
  logout,
}
