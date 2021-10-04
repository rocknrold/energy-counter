import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    energy : 3,
    round: 1,
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.energy >= 10 ? state.energy = 10 : state.energy += 1
        },
        decrement: (state) => {
            state.energy <= 0 ? state.energy = 0 : state.energy -= 1
        },
        nextRound: (state) => {
            state.round += 1
            state.energy >= 9 ? state.energy = 10 : state.energy += 2
        },
        reset: (state) => {
            state.round = 1
            state.energy = 3
        }
    }
})

export const { increment, decrement, nextRound, reset } = counterSlice.actions

export const setEnergy = state => state.counter.energy
export const setRound = state => state.counter.round

export default counterSlice.reducer