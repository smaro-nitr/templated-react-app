const reducer = function(state, payload){
    if(payload.type === "ATTACK"){
        return payload.state;
    }
    return state;
};

export default reducer;