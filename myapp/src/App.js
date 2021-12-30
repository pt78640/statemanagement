import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}> increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(count * 2)}>multiply</button>
    </div >
  );
}

export default App;
