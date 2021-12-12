const myCreateStore = (reducer) => {
    let state = undefined;
    let subscriptions = [];

    const dispatch = (action) => {
        state = reducer(state, action);
        subscriptions.forEach((f) => f());
    };

    const subscribe = (func) => {
        subscriptions.push(func);
        return () => {
            subscriptions = subscriptions.filter((f) => f !== func);
        }
    };

    dispatch({});

    return {
        getState: () => state,
        dispatch,
        subscribe
    };
};

export default myCreateStore;