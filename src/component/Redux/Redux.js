import React, { Component } from 'react';
import store from '../store';

class Redux extends Component {
    render() {
        store.subscribe(() => {});
        store.dispatch({
            type: "ATTACK", 
            state: {
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