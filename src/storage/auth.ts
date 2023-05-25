import { useEffect, useState } from 'react'
import { getStorageItem } from './storage'
import { StorageItemType } from './enum'

const useAuth = () => {
  const [token, setToken] = useState(undefined)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getStorageItem(StorageItemType.TOKEN).then(storedToken => {
      if (storedToken) {
        setLoading(false)
      }
    })
  }, [])

  return { token, isLoading }
}
