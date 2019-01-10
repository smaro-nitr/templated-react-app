import { createStore } from 'redux';
import reducer from './reducer';

var defaultstate = {
    redux: "", 
    apifetch:"Which action hero will save us in future ? .. Find out in Redux tab"
}
const store = createStore(reducer, defaultstate);

export default store;