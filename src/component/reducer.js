const reducer = function(state, action){
    switch (action.type) {
        case "ATTACK" :
            state = action.payload;
            break;
        default :
            break;
    }
    return state;
};

export default reducer;