import { createStore } from "redux";
import reducers from '../reducers/index';

const store = createStore(reducers);

store.subscribe(() => {
    const state = store.getState();
    sessionStorage.setItem('myState', JSON.stringify(state));
});

export default store;