import myCreateStore from './my-create-store.js';
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
    const store = myCreateStore(counter);
    
    $decrement.addEventListener('click', decrement, false);
    $increment.addEventListener('click', increment, false);
    
    function decrement() {
        store.dispatch({ type: 'DECREMENT' });
    }
    
    function increment() {
        store.dispatch({ type: 'INCREMENT' });
    }

    function render() {
        $counter.textContent = store.getState();    
    }
    
    const unsubscribe = store.subscribe(() => {
        // const state = store.getState();
        // $counter.textContent = state;
        render();
    });

    render();
    executeTests(counter);

    setTimeout(() => {
        console.log('unsubscribe');
        unsubscribe();
    }, 5000);
})();