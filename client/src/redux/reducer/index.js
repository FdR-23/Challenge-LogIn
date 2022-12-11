
import { TYPE } from "../actions";



const localStorageCart = window.localStorage.getItem('Token')
const token = JSON.parse(localStorageCart)

const initialState = {
    clients: [],
    token: token ? token : null,
    detailsUser: null,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case TYPE.GET_ALL_CLIENT:
            return {
                ...state,
                clients: action.payload,
            }
        case TYPE.USER_CONECTED:
            return {
                ...state,
                token: action.payload
            }
        case TYPE.USER_DETAILS:
            let { data, status } = action.payload
            const infoUser = { data, status }
            return {
                ...state,
                detailsUser: infoUser
            }
        case TYPE.CLEAR_USER_DETAILS:
            return {
                ...state,
                detailsUser: null
            }
        case TYPE.REGISTER_CLIENT:
            if (action.payload.status === 201) {
                return alert(action.payload.data.message)
            } else {
                return alert(action.payload.data.message)
            }
        case TYPE.UPDATE_CLIENT:
            if (action.payload.status === 201) {
                return alert(action.payload.data.message)
            } else {
                return alert(action.payload.data.message)
            }
        case TYPE.DELETE_CLIENT:
            if (action.payload.status === 201) {
                return alert(action.payload.data.message)
            } else {
                return alert(action.payload.data.message)
            }


        default: return state;
    }
};


export default rootReducer;