import _ from 'lodash'
import { READ_EVENTS } from '../actions'

// state = しょきちを設定

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        default:
            return events 
    }
}
// switch文で分岐させることが可能になる
// action.response.dataで確認をすることが出来る