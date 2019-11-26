import React from 'react';

const App = () => {
  // return <div>HERE</div>
  // returnとしてjsxを変えしている
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
  // 上のcatにmeow!を代入しているイメージ
}
export default App;
