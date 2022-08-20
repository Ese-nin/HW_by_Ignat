import React from 'react'
import {messageDataPropsType} from "./HW1";
import s from "./Message.module.css"

function Message(props: messageDataPropsType) {
    return (
        <div className={s.answer}>
            <div className={s.avatar}>
                <img src={props.avatar} alt={''}/>
            </div>

            <div className={s.triangle}></div>

            <div className={s.textarea}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.message}>
                    {props.message}
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
