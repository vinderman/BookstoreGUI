import { configureStore } from '@reduxjs/toolkit'
import counter from './counter'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    counter
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
