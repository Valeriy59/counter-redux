import React, {useEffect} from 'react';
import s from './Counter.module.css'
// import {Button} from "./Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {incrementCounterAC, resetCounterAC, CounterStateType} from "../state/counter-reducer";
import {AppRootStateType, store} from "../state/state";
import {SettingsStateType} from "../state/settings-reducer";
import {Button, Paper} from "@mui/material";


export function Counter() {
    const counterState = useSelector<AppRootStateType, CounterStateType>(state => store.getState().counter)
    const settingsState = useSelector<AppRootStateType, SettingsStateType>(state => store.getState().settings)
    const dispatch = useDispatch()

    useEffect(() => {
        counterState.counterValue = settingsState.startValue
    }, [])
    return (
        <Paper elevation={24} className={s.containerCounter}  >
            <div className={s.counterInput}>
                <div>
                    <span className={counterState.counterValue >= settingsState.maxValue ? s.error : ""}>{counterState.counterValue}</span>
                </div>
            </div>
            <div className={s.counterButtons}>
                    {/*<Button*/}
                    {/*    title = {"inc"}*/}
                    {/*    disabled={counterState.counterValue >= settingsState.maxValue}*/}
                    {/*    onClickHandler={() => {dispatch(incrementCounterAC())}}*/}
                    {/*/>*/}
                    {/*<Button*/}
                    {/*    title = {"reset"}*/}
                    {/*    disabled={counterState.counterValue <= settingsState.startValue}*/}
                    {/*    onClickHandler={() => {dispatch(resetCounterAC(settingsState.startValue))}}*/}
                    {/*/>*/}
                    <Button
                        size="large"
                        variant="contained"
                        disabled={counterState.counterValue >= settingsState.maxValue}
                        onClick={() => {dispatch(incrementCounterAC())}}
                    >inc
                    </Button>
                    <Button
                        size="large"
                        variant="contained"
                        disabled={counterState.counterValue <= settingsState.startValue}
                        onClick={() => {dispatch(resetCounterAC(settingsState.startValue))}}
                    >reset
                    </Button>
            </div>
        </Paper>
    )
}