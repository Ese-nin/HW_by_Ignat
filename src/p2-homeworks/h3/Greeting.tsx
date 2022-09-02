import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    pressEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, pressEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : "" // need to fix with (?:)

    return (
        <div>
            <input value={name} onKeyDown={pressEnter} onChange={setNameCallback} className={inputClass}/>
            <button onClick={() => addUser(name)}>add</button>
            <span>{totalUsers}</span>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
    )
}

export default Greeting
