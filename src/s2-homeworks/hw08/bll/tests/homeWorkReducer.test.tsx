import { homeWorkReducer } from '../homeWorkReducer'
import { UserType } from '../../HW8'


let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        { _id: 0, name: 'Кот', age: 3 },
        { _id: 1, name: 'Александр', age: 66 },
        { _id: 2, name: 'Коля', age: 16 },
        { _id: 3, name: 'Виктор', age: 44 },
        { _id: 4, name: 'Дмитрий', age: 40 },
        { _id: 5, name: 'Ирина', age: 55 },
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {
        type: 'sort',
        payload: 'up',
    })

    expect(newState[0]._id).toBe(1)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {
        type: 'sort',
        payload: 'down',
    })

    expect(newState[0]._id).toBe(0)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {
        type: 'check',
        payload: 18,
    })

    expect(newState.length).toBe(4)
    expect(newState[3].age).toBe(40)
    expect(newState[2].age).toBe(44)
    expect(newState[1].age).toBe(55)
    expect(newState[0].age).toBe(66)
})


test('check age 15', () => {
    const endState = homeWorkReducer(initialState, {
        type: 'check',
        payload: 15,
    })

    expect(endState.length).toBe(5);
    expect(endState[4].age).toBe(16)
    expect(endState[3].age).toBe(40)
    expect(endState[2].age).toBe(44)
    expect(endState[1].age).toBe(55)
    expect(endState[0].age).toBe(66)
})