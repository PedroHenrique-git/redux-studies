import { createStore } from 'redux';
import reducers from '../reducers';

const store = createStore(reducers);

store.subscribe(() => {
    localStorage.setItem('addresses', JSON.stringify(store.getState()));
});

export default store;