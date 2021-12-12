import { createSlice } from '@reduxjs/toolkit';
import * as types from '../types/index';

type actionType = {
    type: string;
}

export function counterReducer(state = 0, action: actionType) {
    switch (action.type) {
        case types.INCREMENT: return state + 1;
        case types.DECREMENT: return state - 1;
        default: return state;
    }
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1    
    }
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer2 = counterSlice.reducer;


