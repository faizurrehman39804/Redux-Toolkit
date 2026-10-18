import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/counterSlice.js";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>Redux Toolkit Counter</h1>
      <output aria-live="polite">{count}</output>
      <div className="counter__actions">
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch(reset())}>
          Reset
        </button>
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
