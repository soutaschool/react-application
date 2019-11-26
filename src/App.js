import React from 'react';
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    {name: "taro",age: 10 },
    {name: "Hanako",age: 5 },
    {name: "NOname", age: 13}
  ]
  return (
    <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
    </div>
    // divないの全てのものが表示されている
    // {}での書き方はjsでの書き方
    // / を入れることによって管理されている
    // indexをmapとreturnに入れることによって様々なコンソール時のエラーを防ぐことが出来るようになる
  )
}

const User = (props) => {
  return <div>MY name is {props.name}, and {props.age} years old</div>
// 名前を表示したいところに上記で使用したpropsを代入してあげることによって表示される
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

// string = 文字列型


export default App;
