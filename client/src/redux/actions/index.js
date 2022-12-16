import axios from "axios";

export const TYPE = {
    USER_CONECTED: "USER_CONECTED",
    USER_DETAILS: "USER_DETAILS",
    CLEAR_USER_DETAILS: "CLEAR_USER_DETAILS",
    GET_ALL_CLIENT: "GET_ALL_CLIENT",
    REGISTER_CLIENT: "REGISTER_CLIENT",
    DELETE_CLIENT: "DELETE_CLIENT",
    UPDATE_CLIENT: "UPDATE_CLIENT",
    GET_CLIENT_NAME: "GET_CLIENT_NAME",
    SEARCH_RANGE_AGRE: "SEARCH_RANGE_AGE",
    ORDER_ASC_DES: "ORDER_ASC_DES"

};

//Login sesion
export const logIn = async (credentials) => {
    try {
        const response = await axios.post(
            "/login",
            credentials
        );
        return response;

    } catch (err) {
        return err.response;
    }
};

//User conected
export const userConected = (data) => (dispatch) => {
    window.localStorage.setItem("Token", JSON.stringify(data));
    return dispatch({
        type: TYPE.USER_CONECTED,
        payload: data
    })
}

//Login Status
export const statusSession = async (token) => {
    const config = {
        headers: {
            'access-token': `${token}`,
        },
    };
    try {
        const response = await axios.get("/login", config);
        return response;
    } catch (err) {
        return err.response;
    }
};


//User Details
export const userDetails = (id) => async (dispatch) => {
    try {
        const response = await axios.get(
            `/user/${id}`,
        );

        return dispatch({
            type: TYPE.USER_DETAILS,
            payload: response
        })
    } catch (err) {
        return dispatch({
            type: TYPE.USER_DETAILS,
            payload: err.response
        })
    }
};

//CLEAR User Details
export const clearDetailsUser = () => {
    return ({
        type: TYPE.CLEAR_USER_DETAILS,
    })
}



//Logout 
export const LogOut = async (token) => {
    const config = {
        headers: {
            'access-token': `${token}`,
        },
    };
    try {
        const response = await axios.get("/login", config);
        return response;
    } catch (err) {
        return err.response;
    }
};


//Register User
export const registerUser = async (form) => {
    try {
        const response = await axios.post(
            "/signup",
            form
        );
        return response;

    } catch (err) {
        return err.response;
    }
};

//Get ALL Client
export const getAllClient = (token) => async (dispatch) => {
    const config = {
        headers: {
            'access-token': `${token}`,
        },
    };
    try {
        const response = await axios.get("/client", config)
            .then(resp => resp.data)
        return dispatch({
            type: TYPE.GET_ALL_CLIENT,
            payload: response
        })

    } catch (err) {
        return err.response;
    }
};


//Delet CLIENT (admin)}
export const deletUser = (token, id) => async (dispatch) => {
    const config = {
        headers: {
            'access-token': `${token}`,
        },
    };
    try {
        const response = await axios.delete(`/client/${id}`,
            config)
        const { status, data } = response
        return dispatch(
            getAllClient(token),
            alert(`Status: ${status}, ${data.message} `),
            //  {
            //      type: TYPE.DELETE_CLIENT,
            //      payload: response,
            //  },
        )
    } catch (err) {
        const { status, data } = err.response
        return dispatch(
            { type: TYPE.DELETE_CLIENT },
            alert(`Status: ${status}, ${data.message} `),
        )
    }


}

//Register CLIENT
export const registerClient = (form, token) => async (dispatch) => {
    const config = {
        headers: {
            'access-token': `${token}`,
        },
    };
    try {
        const response = await axios.post(
            "/client",
            form, config
        );

        return dispatch({
            type: TYPE.REGISTER_CLIENT,
            payload: response
        })
    } catch (err) {
        return dispatch({
            type: TYPE.REGISTER_CLIENT,
            payload: err.response
        })
    }
};

//Update CLIENT
export const updateRegisterClient = (id, form, token) => async (dispatch) => {
    const config = {
        headers: {
            'access-token': `${token}`,
        },
    };
    try {
        const response = await axios.put(
            `/client/${id}`,
            form, config
        );
        return dispatch({
            type: TYPE.UPDATE_CLIENT,
            payload: response
        })
    } catch (err) {
        return dispatch({
            type: TYPE.UPDATE_CLIENT,
            payload: err.response
        })
    }
};

//Search Client by Name
export const getByNameClient = (name) => async (dispatch) => {

    try {
        const response = await axios.get(`/client_name?name=${name}`);
        return dispatch({
            type: TYPE.GET_CLIENT_NAME,
            payload: response.data
        })
    } catch (error) {
        alert(`Status ${error.response.status} , ${error.response.data.message}`)
    }
}

//Search By Range Age
export const searchRangeAge = (data, arr) => (dispatch) => {
    const { to, from } = data;
    const filterAge = arr.filter((client) => { return client.age >= to && client.age <= from })

    return dispatch({
        type: TYPE.SEARCH_RANGE_AGRE,
        payload: [...filterAge]
    })
}

//Order By ASC DES
export const orderByAscDes = (data, arr) => (dispatch) => {

    const filterOrder = data === "ASC" ?
        arr.sort((a, b) => {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            else return 0
        }) : arr.sort((a, b) => {
            if (a.name < b.name) return 1
            if (a.name > b.name) return -1
            else return 0
        })


    return dispatch({
        type: TYPE.ORDER_ASC_DES,
        payload: [...filterOrder]

    })
}
