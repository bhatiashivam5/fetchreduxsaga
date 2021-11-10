export const loadUser = () =>({
    type: "LOAD_USER",
});

export const loadUserSuccess = (users) =>({
    type: "LOAD_USER_SUCCESS",
    payload: users,
});

export const loadUserFail = (error) =>({
    type: "LOAD_USER_FAIL",
    payload: error,
});