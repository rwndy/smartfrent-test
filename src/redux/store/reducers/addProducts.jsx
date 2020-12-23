import { ADD_PRODUCT } from '../../actionTypes'

const initialState = {
  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state, 
        [action.payload]: action.payload
      }
    default:
      return state
  }
}