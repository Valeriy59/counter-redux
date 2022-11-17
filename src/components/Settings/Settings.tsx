import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'
import {Button} from "../Button/Button";
import {Input} from "./Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "../../state/state";
import {CounterStateType} from "../../state/counter-reducer";
import {setMaxValueAC, setSettingsToStorageAC, setStartValueAC, SettingsStateType} from "../../state/settings-reducer";

export function Settings() {
    const settingsState = useSelector<AppRootStateType, SettingsStateType>(state => store.getState().settings)
    const dispatch = useDispatch()
    // const disableHandler = () => {
    //     return props.maxValue <= 0 || props.startValue < 0 || props.maxValue <= props.startValue;
    // }
    const inputClassName =  s.input + ' ' + (settingsState.error ? s.errorInput : '')

        return (
        <div className={s.containerCounter}>
            <div className={s.counterInput}>
                <Input
                    className={inputClassName}
                    title={"max value:"}
                    value={settingsState.maxValue}
                    setHandler={(value) => {dispatch(setMaxValueAC(value))}}
                />
                <Input
                    className={inputClassName}
                    title={"start value:"}
                    value={settingsState.startValue}
                    setHandler={(value) => {dispatch(setStartValueAC(value))}}
                />
            </div>
            <div className={s.counterButtons}>
                <Button
                    title={"set"}
                    disabled={settingsState.error}
                    onClickHandler={() => {dispatch(setSettingsToStorageAC(settingsState.startValue, settingsState.maxValue))}}
                />
            </div>
        </div>
    )
}