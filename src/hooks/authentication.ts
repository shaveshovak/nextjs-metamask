import { useState, useEffect } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
import { formatBalance } from '../utils'

export const useAuthentication = () => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null)
  const initialState = { accounts: [], balance: '', chainId: '' }
  const [wallet, setWallet] = useState(initialState)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const refreshAccounts = (accounts: any) => {
      if (accounts.length > 0) {
        updateWallet(accounts)
      } else {
        setWallet(initialState)
      }
    }

    const refreshChain = (chainId: any) => {
      setWallet((wallet) => ({ ...wallet, chainId }))
    }

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      setHasProvider(Boolean(provider))

      if (provider) {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        })
        refreshAccounts(accounts)
        window.ethereum.on('accountsChanged', refreshAccounts)
        window.ethereum.on('chainChanged', refreshChain)

      }
    }

    getProvider()

    return () => {
      window.ethereum.removeListener?.('accountsChanged', refreshAccounts)
      window.ethereum.removeListener?.('chainChanged', refreshChain)
    }
  }, [])

  const updateWallet = async (accounts: any) => {
    const balance = formatBalance(
      await window.ethereum!.request({
        method: 'eth_getBalance',
        params: [accounts[0], 'latest'],
      })
    )
    const chainId = await window.ethereum!.request({
      method: 'eth_chainId',
    })
    setWallet({ accounts, balance, chainId })
  }

  const handleConnect = async () => {
    setIsConnecting(true)
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      setError(false)
      updateWallet(accounts)
    } catch (err: any) {
      setError(true)
      setErrorMessage(err.message)
    } finally {
      setIsConnecting(false)
    }
  }

  const truncate = (words: string, maxLength: number) => {
    return `${words.slice(0, maxLength)} …`
  }

  return {
    hasProvider,
    wallet,
    isConnecting,
    error,
    errorMessage,
    handleConnect,
    truncate,
  }
}
