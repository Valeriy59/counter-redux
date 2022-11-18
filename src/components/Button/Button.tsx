import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    disabled?: boolean
    onClickHandler: () => void
}

export const Button = (props: ButtonPropsType) => {
    return (
            <button className={s.button} disabled={props.disabled} onClick={props.onClickHandler}>{props.title}</button>
    )
}