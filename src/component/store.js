import { createStore } from 'redux';
import reducer from './reducer';

var intialstate = {
    redux: "", 
    apifetch:"Which action hero will save us in future ? .. Find out in Redux tab"
}
const store = createStore(reducer, intialstate);

export default store;