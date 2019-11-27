// すべてのレデューサーを結合する役割
import { combineReducers } from 'redux'
// combineReducersが結合する役割の関数
import events from './events'

export default combineReducers({ events })
// countの部分は複数のものを書くことも可能
