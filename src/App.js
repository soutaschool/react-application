import React, {Component} from 'react';

const App = () => (<Counter></Counter>)
// Appがカウンターを呼ぶ

class Counter extends Component {
  constructor(props) {
    // カウンターが呼び出されたときにコンストラクターが表示されるようになる
    super(props)
    console.log(this.state)
    this.state = {count: 0}
    // countの初期化時のメソッドの入り方
  }

  handlePlusButton = () => {
    console.log("handlePlusButton")
    console.log(this.state.count)
    const currentCount = this.state.count
    this.setState({ count: currentCount + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1})
  }
// ハンドルクラスボタンでの定義をしている
// stateを設定する
// 最初の初期化時に０にセットすることができたが
// 今のカウントが必要なのでカレントカウントを必要とされている

// handlePlusButton = () => {
//   this.setState({ count: this.state.count + 1})
// }
// 上記の表示をこのようなことでも呼び出すことが出来るようになる

  render () {
    console.log(this.state)
      return (
        <React.Fragment>
          <div>count: { this.state.count }</div>
          <button onClick={this.handlePlusButton}>+1</button>
          <button onClick={this.handleMinusButton}>-1</button>
        </React.Fragment>
        )
    }
  }

export default App;

// コーポネントの初期化時にはconstructorが呼び出される
// superで親クラスを初期化させることが出来るようになる
// React.Fragmentが複数のものを表示することが出来るようになる