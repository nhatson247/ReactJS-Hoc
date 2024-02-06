import actionTypes from "./actionTypes";
import {
  getAllCodeService,
  createNewUserService,
} from "../../services/userService";

// GENDER
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });
      let res = await getAllCodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFaided());
      }
    } catch (error) {
      dispatch(fetchGenderFaided());
      console.log("fetchGenderStart error", error);
    }
  };
};

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFaided = () => ({
  type: actionTypes.FETCH_GENDER_FAIDED,
});

// POSITION
export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFaided());
      }
    } catch (error) {
      dispatch(fetchPositionFaided());
      console.log("fetchPositionStart error", error);
    }
  };
};

export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});

export const fetchPositionFaided = () => ({
  type: actionTypes.FETCH_POSITION_FAIDED,
});

// ROLE
export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("ROLE");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFaided());
      }
    } catch (error) {
      dispatch(fetchRoleFaided());
      console.log("fetchRoleStart error", error);
    }
  };
};

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});

export const fetchRoleFaided = () => ({
  type: actionTypes.FETCH_ROLE_FAIDED,
});

//CREATE USER
export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      console.log("check res create", res);
      if (res && res.errCode === 0) {
        dispatch(createUserSuccess());
      } else {
        dispatch(createUserFaided(), alert(res.errMessage));
      }
    } catch (error) {
      dispatch(createUserFaided());
      console.log("createNewUser error", error);
    }
  };
};

export const createUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

export const createUserFaided = () => ({
  type: actionTypes.CREATE_USER_FAIDED,
});
