import { useState } from 'react';
import JXS from './components/classes';

function App() {
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)
  const reset = ()=>setCounter(0)
  return (
    <div>
      <h1>I missed You! oh My..</h1>
      <h3>Counter App</h3>
      <h4>current count: {counter}</h4>
      <button onClick={increment}>+1</button>
      <button onClick={ decrement }>-1</button>
      <button onClick={ reset }>reset</button>
      <h2>Classes Components</h2>
      <JXS />
    </div>
  );
}

export default App;
