import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      {isLogged ? (
        <div>
          <h1>Counter {counter}</h1>
          <label>Increment/Decrement by 5</label>
          <br />
          <button onClick={() => dispatch(increment(5))}>+</button>
          <button onClick={() => dispatch(decrement(5))}>-</button>
          <p></p>

          <h3>You are logged in</h3>
          <button onClick={() => dispatch(signIn())}>Click to Log OUT</button>
        </div>
      ) : (
        <div>
          <h3>You are not logged in</h3>
          <button onClick={() => dispatch(signIn())}>Click to Log in</button>
        </div>
      )}
      <br />
    </div>
  );
}

export default App;
