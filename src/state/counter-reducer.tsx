import React from "react";
// Actions
type IncrementCounterActionType = {
    type: 'INCREMENT'
}
type ResetCounterActionType = {
    type: 'RESET'
}
export type ActionType = IncrementCounterActionType | ResetCounterActionType

// State
export type CounterStateType = {
    counterValue: number
}
const initialState: CounterStateType = {
    counterValue: 0
}

export function counterReducer(state: CounterStateType = initialState, action: ActionType) {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.counterValue + 1};
        case 'RESET':
            return {...state, count: 0};
        default:
            return state
    }
}

export const incrementCounterAC = (): IncrementCounterActionType => {
    return { type: 'INCREMENT'} as const
}
export const resetCounterAC = (): ResetCounterActionType => {
    return { type: 'RESET'} as const
}