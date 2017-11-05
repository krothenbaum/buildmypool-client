import xlnSet from '../data/XLN';
export const ADD_CARD = 'pixels/ADD_CARD';

const initialState = {
  xln: xlnSet
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_CARD:
      return {
        ...state
      }

    default:
      return state
  }
}


export function addCard() {
  return dispatch => {
    dispatch({
      type: 'ADD_CARD'
    })
  }
}