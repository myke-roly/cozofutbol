import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageItemType } from './enum'
import { useMutation } from '@tanstack/react-query'

export const setStorageItem = async (
  storageItem: StorageItemType,
  value: any,
) => {
  try {
    await AsyncStorage.setItem(storageItem, JSON.stringify(value))
  } catch (error) {
    console.error(error)
  }
}

export const getStorageItem = async (storageItem: StorageItemType) => {
  try {
    const data = await AsyncStorage.getItem(storageItem)
    console.log(data)
    return !!data ? JSON.parse(data) : null
  } catch (error) {
    console.error(error)
  }
}

export const removeStorageItem = async (storageItem: StorageItemType) => {
  try {
    await AsyncStorage.removeItem(storageItem)
  } catch (error) {
    console.error(error)
  }
}

export const cleanStorage = async () => {
  try {
    await AsyncStorage.clear()
  } catch (error) {
    console.error(error)
  }
}
