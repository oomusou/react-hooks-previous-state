import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const addCount = () => setCount(count + 1);

  return (
    <div>
      <button onClick={ addCount }>+</button>
      <div>{ count }</div>
    </div>
  );
};

export default App;