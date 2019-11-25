import React from 'react';
// reactをimportしなければJSXを使うことができない
function App() {
  // const greeting = "onigiri";
  // const dom = <h1 className>Hello wprld or {greeting}</h1>; ここの行でdomという変数にhello worldを定義している(greetingも出力可能)
  // return dom;  domという変数を表示している

//  return <input type="text" onClick={() => {console.log("you click find day!")}} />;
  // テキストタイプでクリックされたらyou click find dayを表示するというもの
  return (
    <React.Fragment>
    <label htmlFor="bar">bar</label>
    <input type="text" onChange={() => {console.log("I love you")}} />
    </React.Fragment>
    // 一つのタグでならないといけない ..htmlfor labelに付与することで、同じ内容のid属性を持つ要素と関連付けられる
    // react.fragmentを使用することによってdivタグを使わなくても済む
  )
}

export default App;
