
import { ADD, SUB } from '../constant'
// 加 action
export const add = (data) => ({
  type: ADD,
  data
})
// 减 action
export const sub = (data) => ({
  type: SUB,
  data
})
// 异步 action，指 action 值为函数
export const addAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add(data))
    }, time)
  }
}