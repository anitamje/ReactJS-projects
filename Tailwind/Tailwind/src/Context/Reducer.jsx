const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payland.token,
                userInfo: action.payland.userInfo,
            };
        case "LANG":
            return {
                ...state,
                language: action.payland.language,
            };
        default:
            return state;
    } 
};

export default Reducer;
