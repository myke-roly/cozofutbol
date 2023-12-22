import auth from '@react-native-firebase/auth'

const firebaseInit = async () => {
  console.info('Firebase connection starting...')
}

const isLoggedIn = !!auth().currentUser

const login = (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password)
}

const createAccount = (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password)
}

const logout = () => {
  return auth().signOut()
}

export default {
  firebaseInit,
  isLoggedIn,
  createAccount,
  login,
  logout,
  user: auth().currentUser,
}
