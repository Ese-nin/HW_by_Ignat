import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let stateCopy = state
            if (action.payload === 'up') {
                stateCopy.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (action.payload === 'down') {
                stateCopy.sort((a, b) => b.name.localeCompare(a.name))
            }
            return stateCopy// need to fix
        }
        case 'check': {
            let stateCopy = state
            return stateCopy.filter(el => el.age > 18).sort((a,b)=>a.age-b.age) // need to fix
        }
        default:
            return state
    }
}
