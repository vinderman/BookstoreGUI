import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './index'

interface CounterState {
  value: number
}

const initialState: CounterState = { value: 0 }
const counterStore = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterStore.actions

export const duplicatedCount: (state: RootState) => number = state => state.counter.value * 2
export default counterStore.reducer
