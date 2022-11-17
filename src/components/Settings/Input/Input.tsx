import React, {ChangeEvent} from 'react';
import s from '../Counter.module.css'


type PropsType = {
    title: string
    value: number
    setHandler: (value: number) => void
    className: string
}

export function Input(props: PropsType) {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        props.setHandler(Number(e.currentTarget.value))
    }

    return (
        <div>
            <span>{props.title}</span> <input className={props.className} type={'number'} value={props.value} onChange={onChangeCallback}/>
        </div>
    )
}