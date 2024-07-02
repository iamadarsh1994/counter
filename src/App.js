import { useState } from 'react';
import './App.css';
const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <>
      <header>
        <h1>Counter</h1>
      </header>
      <main>
        <p>{counter}</p>
        <div>
          <button type="button" onClick={decrement}>
            -
          </button>
          <button type="button" onClick={increment}>
            +
          </button>
        </div>
      </main>
    </>
  );
};

export default App;