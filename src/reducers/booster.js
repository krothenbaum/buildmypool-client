import xlnSet from '../data/XLN';
export const CREATE_BOOSTERS = 'booster/CREATE_BOOSTER';

const initialState = {
  xln: xlnSet
}

export default (state = initialState, action) => {
  switch (action.type) {

    case CREATE_BOOSTERS:
      return {
        ...state
      }

    default:
      return state
  }
}


export function createBoosters() {
  // const generateBooster = () => {
  //   let booster = [];

  //   return booster;
  // }
  return dispatch => {
    dispatch({
      type: 'CREATE_BOOSTER'
    })
  }
}