import React, { Component } from 'react';
import { createStore } from 'redux';

class Redux extends Component {
    render() {
        const reducer = function(state, action){
            if(action.type === "ATTACK"){
                return action.payload;
            }
            return state;
        };
        
        const store = createStore(reducer, "Initial Action Hero");

        store.subscribe(() => {
            console.log("store is now", store.getState());
        })
        
        store.dispatch({type: "NOATTACK", payload: ""})
        store.dispatch({type: "ATTACK", payload: "Iron Man"})

        return (
            <div className="card card-body">
                Redux
            </div>
        );
    }
}

export default Redux;