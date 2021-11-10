const INITIAL_STATE = {
    loading: false,
    users: [],
    errors: null
};

const userReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case "LOAD_USER":
            return {
                ...state,
                loading: true
            };
         case "LOAD_USER_SUCCESS":
            return {
                    ...state,
                    loading: false,
                    users:action.payload,
                };
        case "LOAD_USER_FAIL":
            return {
                    ...state,
                    loading: false,
                    errors:action.payload,
                };
        default:
            return state;
    }
};

export default userReducer;