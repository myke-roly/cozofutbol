import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js'

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo)
jest.useFakeTimers().mock('@react-native-firebase/auth', () => () => ({
  currentUser: {
    uid: 'test-uid',
    email: 'test-email',
  },
}))

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
