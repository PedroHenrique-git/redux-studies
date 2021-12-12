import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from "../../modules/actions/couterActions";
import { decrement, increment } from '../../modules/reducers/counterReducer';

export default function Counter() {
    const actualStateCounterOne = useSelector((state: { counter: number }) => state.counter);
    const actualStateCounterTwo = useSelector((state: { counter2: number }) => state.counter2);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <p>Counter 1</p>
            <h1 className="counter">{actualStateCounterOne}</h1>
            <button className="increment" onClick={() => dispatch(incrementCounter())}>+</button>
            <button className="decrement" onClick={() => dispatch(decrementCounter())} disabled={actualStateCounterOne === 0}>-</button>
            
            <p>Counter 2</p>
            <h1 className="counter">{actualStateCounterTwo}</h1>
            <button className="increment" onClick={() => dispatch(increment())}>+</button>
            <button className="decrement" onClick={() => dispatch(decrement())} disabled={actualStateCounterTwo === 0}>-</button>
        </div>
    );
}

/*

const mapStateToProps = (state: any) => ({
    counter: state
});

const mapDispatchToProps= (dispatch: any) => ({
    increment: () => dispatch({ type: 'INCREMENT '}),
    decrement: () => dispatch({ type: 'INCREMENT '})
});

connect(mapStateToProps, mapDispatchToProps)(Counter);

*/