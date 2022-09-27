import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

function Header() {

    const [hide, setHide] = useState(true)

    const onClickHandler = () => {
        setHide(!hide)
    }

    return (
        <div className={s.wrapper}>
            {/*add NavLinks*/}

            <div className={hide ? s.header_hide : s.header_active}>
                <a onClick={onClickHandler} className={s.label}>
                    <img height="40px" width="30px"
                         src="https://belspecexport.by/assets/images/icons/footer_icon_1.png"/>
                </a>
                <div className={s.item}>
                    <NavLink className={s.link} to={'/pre-junior'}>PreJunior</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={s.link} to={'/junior'}>Junior</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={s.link} to={'/junior-plus'}>SuperJunior</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
