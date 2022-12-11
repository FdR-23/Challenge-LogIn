import axios from "axios";

export const TYPE = {
    USER_CONECTED: "USER_CONECTED",
    USER_DETAILS: "USER_DETAILS",
    CLEAR_USER_DETAILS: "CLEAR_USER_DETAILS",
    GET_ALL_CLIENT: "GET_ALL_CLIENT",
    REGISTER_CLIENT: "REGISTER_CLIENT",
    DELETE_CLIENT: "DELETE_CLIENT",
    UPDATE_CLIENT: "UPDATE_CLIENT",
};

//Login sesion
export const logIn = async (credentials) => {
    try {
        const response = await axios.post(
            "http://localhost:3004/login",
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
        const response = await axios.get("http://localhost:3004/login", config);
        return response;
    } catch (err) {
        return err.response;
    }
};


//User Details
export const userDetails = (id) => async (dispatch) => {
    try {
        const response = await axios.get(
            `http://localhost:3004/user/${id}`,
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
        const response = await axios.get("http://localhost:3004/login", config);
        return response;
    } catch (err) {
        return err.response;
    }
};



//Register User
export const registerUser = async (form) => {
    try {
        const response = await axios.post(
            "http://localhost:3004/signup",
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
        const response = await axios.get("http://localhost:3004/client", config)
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
        const response = await axios.delete(`http://localhost:3004/client/${id}`, config)
        const { status, data } = response
        return dispatch(
            getAllClient(token),
            alert(`Status: ${status}, ${data.message} `),
            // {
            //     type: TYPE.DELETE_CLIENT,
            //     payload: response,
            // },
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
            "http://localhost:3004/client",
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

//UPdate CLIENT
export const updateRegisterClient = (id, form, token) => async (dispatch) => {
    const config = {
        headers: {
            'access-token': `${token}`,
        },
    };
    try {
        const response = await axios.put(
            `http://localhost:3004/client/${id}`,
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