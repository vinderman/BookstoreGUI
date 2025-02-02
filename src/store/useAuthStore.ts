import { create } from 'zustand'

export interface AuthStore {
  accessToken: string
}

const useUserStore = create<AuthStore>((set) => ({
  accessToken: ''
}))

export default useUserStore
