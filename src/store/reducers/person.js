
import { ADD_PERSON } from '../constant'

const initState = [
  { id: 0, name: '张三', age: 18, },
  { id: 1, name: '李四', age: 20, }
]

export default function personReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return preState
  }
}