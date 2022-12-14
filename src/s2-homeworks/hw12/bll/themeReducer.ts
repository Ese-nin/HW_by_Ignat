export type InitStateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {themeId: action.id}
        default:
            return state
    }
}

type ChangeThemeIdType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number): { type: 'SET_THEME_ID', id: number } => ({type: 'SET_THEME_ID', id}) // fix any
