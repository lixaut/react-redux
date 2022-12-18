
import { ADD_PERSON } from '../constant'

export const addPerson = (data) => {
  return {
    type: ADD_PERSON,
    data
  }
}