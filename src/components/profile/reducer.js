import * as types from './types'
const initialState = {
    name: 'evilArthas'
}
export const profileReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case types.CHANGE_NAME:
            return {
                ...state,
                name: payload
            }

        default:
            return state
    }
}