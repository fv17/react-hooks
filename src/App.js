import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('Banana');

  const handleAddClick = () => {
    setCount(count + 1)
  }

  const handleChangeFruitClick = () => {
    fruit === 'Banana' ? setFruit('Apple') : setFruit('Banana')
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleAddClick}>
        Add
      </button>

      <p>Your fruit is {fruit}</p>
      <button onClick={handleChangeFruitClick}>
        Change fruit
      </button>
    </div>
  )
}

export default App;
