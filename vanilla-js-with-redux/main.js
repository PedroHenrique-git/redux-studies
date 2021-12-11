(function() {
    'use strict'

    const counter = (state = 0, action) => {
        switch(action.type) {
            case 'INCREMENT': return state + 1;
            case 'DECREMENT': return state - 1;
            default: return state;
        }
    };

    console.assert(
        counter(0, { type: 'INCREMENT' }) === 1,
        'should return 1'
    );

    console.assert(
        counter(1, { type: 'INCREMENT' }) === 2,
        'should return 2'
    );

    console.assert(
        counter(2, { type: 'DECREMENT' }) === 1,
        'should return 1'
    );

    console.assert(
        counter(5, { type: 'DECREMENT' }) === 4,
        'should return 4'
    );

    console.assert(
        counter(3, { type: 'SOMETHING' }) === 3,
        'should return 3'
    );

    console.assert(
        counter(undefined, {}) === 0,
        'should return 0'
    );
})();