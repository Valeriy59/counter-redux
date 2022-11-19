import React from "react";

// Actions
type SetStartValueActionType = {
    type: 'SET-START-VALUE'
    startValue: number
}
type SetMaxValueActionType = {
    type: 'SET-MAX-VALUE'
    maxValue: number
}
type SetSettingsToStorageActionType = {
    type: 'SET-SETTINGS-TO-STORAGE'
    startValue: number
    maxValue: number
}
type SetErrorActionType = {
    type: 'SET-ERROR'
    error: boolean
}
export type ActionType = SetStartValueActionType | SetMaxValueActionType | SetSettingsToStorageActionType | SetErrorActionType

// State
export type SettingsStateType = {
    maxValue: number
    startValue: number
    // error: boolean
}
const initialState: SettingsStateType = {
    maxValue: 5,
    startValue: 0,
    // error: false
}

export function settingsReducer(state: SettingsStateType = initialState, action: ActionType) {
    switch (action.type) {
        case 'SET-START-VALUE':
            return {...state, startValue: action.startValue};
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.maxValue};
        case 'SET-SETTINGS-TO-STORAGE':
            return {...state, startValue: action.startValue, maxValue: action.maxValue};
        // case 'SET-ERROR':
        //     return {...state, error: action.error};
        default:
            return state
    }
}

export const setStartValueAC = (startValue: number): SetStartValueActionType => {
    return { type: 'SET-START-VALUE', startValue} as const
}
export const setMaxValueAC = (maxValue: number): SetMaxValueActionType => {
    return { type: 'SET-MAX-VALUE', maxValue} as const
}
export const setSettingsToStorageAC = (startValue: number, maxValue: number): SetSettingsToStorageActionType => {
    return { type: 'SET-SETTINGS-TO-STORAGE', startValue, maxValue} as const
}
// export const setErrorAC = (error: boolean): SetErrorActionType => {
//     return { type: 'SET-ERROR', error} as const
// }