import axios from "axios";

export const TYPE = {
    GET_ALL_CLIENT: "GET_ALL_CLIENT",
    DELETE_CLIENT: "DELETE_CLIENT",
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


//Delet User (admin)}
export const deletUser = (token, id) => async (dispatch) => {
    const config = {
        headers: {
            'access-token': `${token}`,
        },
    };
    try {
        const response = await axios.delete(`http://localhost:3004/client/${id}`, config)

        return dispatch({
            type: TYPE.DELETE_CLIENT,
            payload: response,
        })


    } catch (err) {
        return dispatch({
            type: TYPE.DELETE_CLIENT,
            payload: err.response,
        })
    }


}