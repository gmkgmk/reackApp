import * as actionTypes from '../constants/store'

const initialState = []

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.STORE_UPDATE:
            return action.data
        case actionTypes.STORE_ADD:
            state.unshift(action.item)
            return state
        case actionTypes.STORE_REMOVE:
            return state.filter(item => {
                if (item.id !== action.item.id) {
                    return item
                }
            })
        default:
            return state
    }
}