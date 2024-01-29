import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  roles: [],
  positions: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      console.log("check FETCH_GENDER_START", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      let copyState = { ...state };
      copyState.genders = action.data;
      console.log("check FETCH_GENDER_SUCCESS", action);
      return {
        ...copyState,
      };
    case actionTypes.FETCH_GENDER_FAIDED:
      console.log("check FETCH_GENDER_FAIDED", action);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
