// すべてのレデューサーを結合する役割
import { combineReducers } from 'redux'
// combineReducersが結合する役割の関数
import count from './count'

export default combineReducers({ count })
// countの部分は複数のものを書くことも可能
