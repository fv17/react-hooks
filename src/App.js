import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('Banana');


  // クリーンアップを必要としない副作用
  // 例えば、ネットワークリクエストの送信、手動での DOM 改変、ログの記録など

  // クリーンアップを有する副作用
  // 例えば、外部のデータソースへの購読など
  // メモリリークを防ぐためにクリーンアップが必要

  // DOMの更新後に渡した関数の処理が行われる
  useEffect(() => {
    document.title = `You Clicked ${count} times!`

    // クリーンアップが必要な場合、ここで関数を返す
  });

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
