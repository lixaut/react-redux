
import { ADD_PERSON } from '../constant'

export const createAddPersonAction = (data) => {
  return {
    type: ADD_PERSON,
    data
  }
}