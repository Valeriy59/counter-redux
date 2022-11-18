import React, {useEffect} from 'react';
import s from './Settings.module.css'
// import {Button} from "../Button/Button";
import {Input1} from "./Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "../../state/state";
import {setErrorAC, setMaxValueAC, setStartValueAC, SettingsStateType} from "../../state/settings-reducer";
import {Button} from "@mui/material";

export function Settings() {
    const settingsState = useSelector<AppRootStateType, SettingsStateType>(state => store.getState().settings)
    const dispatch = useDispatch()

    const inputClassName =  s.input + ' ' + (settingsState.error ? s.errorInput : '')

    useEffect(() => {
        let newStartValueString = localStorage.getItem('startValue')
        let newMaxValueString = localStorage.getItem('maxValue')
        if (newStartValueString && newMaxValueString) {
            dispatch(setMaxValueAC(JSON.parse(newMaxValueString)))
            dispatch(setStartValueAC(JSON.parse(newStartValueString)))
        }
    }, [])

    const setSettings = () => {
        localStorage.setItem('startValue', JSON.stringify(settingsState.startValue))
        localStorage.setItem('maxValue', JSON.stringify(settingsState.maxValue))
    }
    // useEffect(() => {
    //     if (settingsState.maxValue && settingsState.startValue) {
    //         if (settingsState.maxValue <= 0 || settingsState.startValue < 0 || settingsState.maxValue <= settingsState.startValue) {
    //             dispatch(setErrorAC(true))
    //         } else {
    //             dispatch(setErrorAC(false))
    //         }
    //     }
    // }, [settingsState])
    // if (settingsState.maxValue && settingsState.startValue) {
    //     if (settingsState.maxValue <= 0 || settingsState.startValue < 0 || settingsState.maxValue <= settingsState.startValue) {
    //         dispatch(setErrorAC(true))
    //     } else {
    //         dispatch(setErrorAC(false))
    //     }
    // }
    // dispatch(setErrorAC(settingsState.maxValue <= 0 || settingsState.startValue < 0 || settingsState.maxValue <= settingsState.startValue))

        return (
        <div className={s.containerCounter}>
            <div className={s.counterInput}>
                <Input1
                    className={inputClassName}
                    title={"max value:"}
                    value={settingsState.maxValue}
                    setHandler={(value) => {dispatch(setMaxValueAC(value))}}
                />
                <Input1
                    className={inputClassName}
                    title={"start value:"}
                    value={settingsState.startValue}
                    setHandler={(value) => {dispatch(setStartValueAC(value))}}
                />
            </div>
            <div className={s.counterButtons}>
                <Button
                    size="large"
                    variant="contained"
                    disabled={settingsState.error}
                    onClick={setSettings}
                >set
                </Button>
            </div>
        </div>
    )
}