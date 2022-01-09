import { applyMiddleware, createStore, Middleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleware: Middleware = ({ dispatch, getState }) => (next) => (action) => {
    console.log(action);
    const nextAction = next(action);
    console.log(nextAction);
    return nextAction;
}

const store = createStore(reducers, applyMiddleware(middleware, thunk));

store.subscribe(() => {
    localStorage.setItem('addresses', JSON.stringify(store.getState()));
});

store.replaceReducer(reducers);

export default store;