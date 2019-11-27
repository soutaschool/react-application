import React, {Component} from 'react';
import { connect } from 'react-redux'

import { increment, decrement} from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    console.log("hi")
    this.props.readEvents()
  }
// readEventsというものが外部のAPIサーバーを取得するような役割を担っている

  render () {
    const props = this.props
      return (
        <React.Fragment>
          <div>Value: { props.value }</div>
          <button onClick={props.increment}>+1</button>
          <button onClick={props.decrement}>-1</button>
        </React.Fragment>
        )
    }
  }

const mapStoreToProps = state => ({ value: state.count.value })

const mapDispatchToProps = ({ readEvents })
// このように書くこともできる


export default connect(mapStoreToProps, mapDispatchToProps)(EventsIndex)
// ここでコネクトしている（超大切！）