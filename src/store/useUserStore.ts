import { createWithEqualityFn } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'
import { CSSProperties } from 'react'

export type CssColor = CSSProperties['color']
export interface UseUserStore {
  user: {
    firstName: string
    lastName: string
  }
  fullName: () => string
  update: (payload: {
    firstName: string
    lastName: string
  }) => void
}

const useUserStore = createWithEqualityFn<UseUserStore>(
  (set, get) => ({
    user: {
      firstName: 'Евген',
      lastName: 'Калмык',
    },
    fullName: () => get().user.firstName + get().user.lastName,
    update: (payload) =>
      set((state) => ({ user: payload}))
  }),
  shallow
)

export default useUserStore
