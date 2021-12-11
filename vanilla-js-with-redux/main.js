import { executeTests } from './testes.js';

(function() {
    'use strict'

    const $counter = document.querySelector('.counter');
    const $increment = document.querySelector('.increment');
    const $decrement = document.querySelector('.decrement');
    
    const counter = (state = 0, action) => {
        switch(action.type) {
            case 'INCREMENT': return state + 1;
            case 'DECREMENT': return state - 1;
            default: return state;
        }
    };

    const { createStore } = Redux;
    const store = createStore(counter);
    
    $decrement.addEventListener('click', decrement, false);
    $increment.addEventListener('click', increment, false);
    
    function decrement() {
        store.dispatch({ type: 'DECREMENT' });
    }
    
    function increment() {
        store.dispatch({ type: 'INCREMENT' });
    }
    
    store.subscribe(() => {
        const state = store.getState();
        $counter.textContent = state;
    });

    executeTests(counter);
})();