import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from "../../modules/actions/couterActions";

export default function Counter() {
    const actualState = useSelector((state: { counter: number }) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <h1 className="counter">{actualState}</h1>
            <button className="increment" onClick={() => dispatch(incrementCounter())}>+</button>
            <button className="decrement" onClick={() => dispatch(decrementCounter())} disabled={actualState === 0}>-</button>
        </div>
    );
}