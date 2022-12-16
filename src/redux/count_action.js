
import { ADD, SUB, ADD5 } from './constant'
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
// 加 5 action
export const createAdd5Action = (data) => ({
  type: ADD5,
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