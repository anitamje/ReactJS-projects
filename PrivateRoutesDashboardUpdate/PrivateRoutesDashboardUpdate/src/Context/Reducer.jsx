const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payland.token,
                userInfo: action.payland.userInfo,
            };
        default:
            return state;
    } 
};

export default Reducer;
