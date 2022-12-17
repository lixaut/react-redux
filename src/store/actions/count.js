
import { ADD, SUB } from '../constant'
// 加 action
export const createAddAction = (data) => ({
  type: ADD,
  data
})
// 减 action
export const createSubAction = (data) => ({
  type: SUB,
  data
})
// 异步 action，指 action 值为函数
export const createAddAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createAddAction(data))
    }, time)
  }
}