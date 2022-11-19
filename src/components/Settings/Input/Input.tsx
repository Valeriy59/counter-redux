import React, {ChangeEvent} from 'react';
import s from '../Counter.module.css'
import {TextField} from "@mui/material";


type PropsType = {
    title: string
    value: number
    setHandler: (value: number) => void
    error: boolean
}

export function Input (props: PropsType) {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        props.setHandler(Number(e.currentTarget.value))
    }

    return (
        <div>
            <TextField
                variant={'outlined'}
                type={'number'}
                size={'small'}
                margin={'normal'}
                helperText={props.error ? 'Incorrect entry.' : ''}
                error={props.error}
                label={props.title}
                value={props.value}
                onChange={onChangeCallback}
            />
            {/*<span>{props.title}</span>*/}
            {/*<input className={props.className} type={'number'} value={props.value} onChange={onChangeCallback}/>*/}
        </div>
    )
}