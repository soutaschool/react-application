import { READ_EVENTS } from '../actions'

// state = しょきちを設定

export default (state = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return state
        default:
            return state
    }
}
// switch文で分岐させることが可能になる
