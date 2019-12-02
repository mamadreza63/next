import axios from 'axios';


export const Login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = ({username, password}) => (dispatch, getState) =>  {
    console.log(username);
    console.log(getState().auth);
    return axios({
        method: "get",
        url: `https://api.github.com/users/${username}`,
        headers: {
            "Content-Type": "application/json"
        },
        // auth: {
        //     username,
        //     password
        // }
    }).then(response => {
            dispatch(Login(username));
    });
}