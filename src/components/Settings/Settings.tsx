import React, {useEffect} from 'react';
import s from './Settings.module.css'
import {Input} from "./Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "../../state/state";
import {setMaxValueAC, setStartValueAC, SettingsStateType} from "../../state/settings-reducer";
import {Button, Paper} from "@mui/material";

export function Settings() {
    const settingsState = useSelector<AppRootStateType, SettingsStateType>(state => store.getState().settings)
    const dispatch = useDispatch()

    // load settings from local storage
    useEffect(() => {
        let newStartValueString = localStorage.getItem('startValue')
        let newMaxValueString = localStorage.getItem('maxValue')
        if (newStartValueString && newMaxValueString) {
            dispatch(setMaxValueAC(JSON.parse(newMaxValueString)))
            dispatch(setStartValueAC(JSON.parse(newStartValueString)))
        }
    }, [])

    // save settings to local storage
    const setSettings = () => {
        localStorage.setItem('startValue', JSON.stringify(settingsState.startValue))
        localStorage.setItem('maxValue', JSON.stringify(settingsState.maxValue))
    }

    // incorrect input for settings
    let maxValueError = (settingsState.maxValue <= 0 || settingsState.maxValue <= settingsState.startValue)
    let startValueError = settingsState.startValue < 0 || settingsState.startValue >= settingsState.maxValue

        return (
        <Paper elevation={24} className={s.containerCounter} >
            <div className={s.counterInput}>

                <Input
                    title={"max value"}
                    value={settingsState.maxValue}
                    error={maxValueError}
                    setHandler={(value) => {dispatch(setMaxValueAC(value))}}
                />
                <Input
                    title={"start value"}
                    value={settingsState.startValue}
                    setHandler={(value) => {dispatch(setStartValueAC(value))}}
                    error={startValueError}
                />
            </div>
            <div className={s.counterButtons}>
                <Button
                    size="large"
                    variant="contained"
                    disabled={startValueError || maxValueError}
                    onClick={setSettings}
                >set
                </Button>
            </div>
        </Paper>
    )
}