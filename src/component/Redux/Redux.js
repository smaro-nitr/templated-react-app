import React, { Component } from 'react';
import store from '../store';

class Redux extends Component {
    render() {
        store.subscribe(() => { console.log("Store updated to : " + store.getState()) });
        store.dispatch({
            type: "ATTACK", 
            payload: {
                redux: "Iron man will save us .. Verify it in Welcome tab", 
                apifetch:"Iron man will save us for sure"
            }
        });

        return (
            <div className="card card-body">
               {store.getState().redux}
            </div>
        );
    }
}

export default Redux;