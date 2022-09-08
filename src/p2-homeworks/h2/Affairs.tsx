import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from "./HW2";
import s from "./Affairs.module.css"


type AffairsPropsType = { // need to fix any
    filter: FilterType
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.length
        ? props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    )) : <div>list empty</div>

    const setAll = (value: FilterType) => {
        props.setFilter(value)
    }
    const setHigh = (value: FilterType) => {
        props.setFilter(value)
    }
    const setMiddle = (value: FilterType) => {
        props.setFilter(value)
    }
    const setLow = (value: FilterType) => {
        props.setFilter(value)
    }

    return (
        <div>
            <div className={s.filterButtons}>
                <button className={props.filter === "all" ? s.activeFilter : ""} onClick={() => setAll("all")}>All
                </button>
                <button className={props.filter === "high" ? s.activeFilter : ""} onClick={() => setHigh("high")}>High
                </button>
                <button className={props.filter === "middle" ? s.activeFilter : ""}
                        onClick={() => setMiddle("middle")}>Middle
                </button>
                <button className={props.filter === "low" ? s.activeFilter : ""} onClick={() => setLow("low")}>Low
                </button>
            </div>

            {mappedAffairs}

        </div> // переместил {mappedAffairs} вниз, чтобы меняющийся список не менял положение кнопок
    )
}

export default Affairs
