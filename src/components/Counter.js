import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
    const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter)

  const incrementHandler = () => {
    // dispatch({type: 'increment', value: 1})
    dispatch(counterActions.increment(1))
  }

  const incrementby5 = () => {
    // dispatch({type: 'increment', value: 5})
    dispatch(counterActions.increment(5))
  }

//   const decrementHandler = () => {
//     dispatch({type: 'decrement'})
// }

const decrementHandler = () => {
    // dispatch({type: 'increment', value: -1})
    dispatch(counterActions.increment(-1))
}
  const toggleCounterHandler = () => {
    //   dispatch({type: 'toggle'})
    dispatch(counterActions.toggleCounter())
  };



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementby5}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
