const intialstate = {
    redux: "", 
    apifetch:"Which action hero will save us in future ? .. Find out in Redux tab"
}

const reducer = function(state, action){
    switch (action.type) {
        case "ATTACK" :
            state = action.payload;
            break;
        default :
            state = intialstate;
            break;
    }
    return state;
};

export default reducer;
