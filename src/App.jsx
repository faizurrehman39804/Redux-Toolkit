import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/counterSlice.js";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <div className="counter__actions flex flex-wrap justify-center gap-3">
        <output aria-live="polite" className="text-5xl font-bold text-blue-600">
          {count}
        </output>

        <button
          type="button"
          className="min-w-28 cursor-pointer rounded-md border border-rose-300 bg-white px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm transition-colors hover:bg-rose-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 active:translate-y-px"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          type="button"
          className="min-w-28 cursor-pointer rounded-md border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-800 shadow-sm transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:translate-y-px"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
        <button
          type="button"
          className="min-w-28 cursor-pointer rounded-md border border-emerald-700 bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 active:translate-y-px"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
