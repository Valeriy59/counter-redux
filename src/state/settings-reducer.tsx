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
export type ActionType = SetStartValueActionType | SetMaxValueActionType | SetSettingsToStorageActionType

// State
export type SettingsStateType = {
    maxValue: number
    startValue: number
    error: boolean
}
const initialState: SettingsStateType = {
    maxValue: 5,
    startValue: 0,
    error: false
}

export function settingsReducer(state: SettingsStateType = initialState, action: ActionType) {
    switch (action.type) {
        case 'SET-START-VALUE':
            return {...state, startValue: action.startValue};
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.maxValue};
        case 'SET-SETTINGS-TO-STORAGE':
            localStorage.setItem('startValue', JSON.stringify(action.startValue))
            localStorage.setItem('maxValue', JSON.stringify(action.maxValue))
            return {...state, startValue: action.startValue, maxValue: action.maxValue};
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