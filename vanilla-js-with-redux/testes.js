export const executeTests = (reducer) => {
    console.assert(
        reducer(0, { type: 'INCREMENT' }) === 1,
        'should return 1'
    );

    console.assert(
        reducer(1, { type: 'INCREMENT' }) === 2,
        'should return 2'
    );

    console.assert(
        reducer(2, { type: 'DECREMENT' }) === 1,
        'should return 1'
    );

    console.assert(
        reducer(5, { type: 'DECREMENT' }) === 4,
        'should return 4'
    );

    console.assert(
        reducer(3, { type: 'SOMETHING' }) === 3,
        'should return 3'
    );

    console.assert(
        reducer(undefined, {}) === 0,
        'should return 0'
    );
};