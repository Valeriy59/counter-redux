import React from "react";
// Actions
type IncrementCounterActionType = {
    type: 'INCREMENT'
}
type ResetCounterActionType = {
    type: 'RESET',
    startValue: number
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
            return {...state, counterValue: state.counterValue + 1};
        case 'RESET':
            return {...state, counterValue: action.startValue};
        default:
            return state
    }
}

export const incrementCounterAC = (): IncrementCounterActionType => {
    return { type: 'INCREMENT'} as const
}
export const resetCounterAC = (startValue: number): ResetCounterActionType => {
    return { type: 'RESET', startValue} as const
}