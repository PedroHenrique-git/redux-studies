import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleware: Middleware = ({ dispatch, getState }) => (next) => (action) => {
    console.log(action);
    const nextAction = next(action);
    console.log(nextAction);
    return nextAction;
}

const composeEnhancers = composeWithDevTools({});

// const enhancer = compose(applyMiddleware(middleware), applyMiddleware(thunk));

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
  
store.subscribe(() => {
    localStorage.setItem('addresses', JSON.stringify(store.getState()));
});

store.replaceReducer(reducers);

export default store;