import React, {Component} from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'

import { readEvents} from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }
// readEventsというものが外部のAPIサーバーを取得するような役割を担っている

renderEvents() {
  return _.map(this.props.events, event => (
    <tr key={event.id}>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
    </tr>
  ) )
}

  render () {
      return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        )
    }
  }

const mapStoreToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })
// このように書くこともできる


export default connect(mapStoreToProps, mapDispatchToProps)(EventsIndex)
// ここでコネクトしている（超大切！）