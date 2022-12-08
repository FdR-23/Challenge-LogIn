
import { TYPE } from "../actions";

const initialState = {
    clients: [],

}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case TYPE.GET_ALL_CLIENT:
            return {
                clients: action.payload,
            }
        case TYPE.DELETE_CLIENT:
            // const { message } = action.payload.data
            // return alert(message)

        default: return state;
    }
};


export default rootReducer;