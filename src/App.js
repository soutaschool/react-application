import React from 'react';

const App = () => {
  const profiles = [
    {name: "taro",age: "10" },
    {name: "Hanako",age: "5" }
  ]
  return (
    <div>
    {
      profiles.map((profile) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
    </div>
    // divないの全てのものが表示されている
    // {}での書き方はjsでの書き方
    // / を入れることによって管理されている
  )
}

const User = (props) => {
  return <div>MY name is {props.name}, and {props.age} years old</div>
// 名前を表示したいところに上記で使用したpropsを代入してあげることによって表示される
}

User.defaultProps = {
  age: 1
}
// 何もないときに代わりに表示してくれる
export default App;
