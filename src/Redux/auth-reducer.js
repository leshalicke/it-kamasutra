import { stopSubmit } from "redux-form";
import { headerAPI, securityAPI } from "../API/API";

const SET_USER_DATA = 'kama-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'kama-network/auth/GET_CAPTCHA_URL_SUCCESS';


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      }
    };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) =>
  ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });
  
export const getCaptchaUrlSuccess = (captchaUrl) => 
({type: GET_CAPTCHA_URL_SUCCESS,payload: {captchaUrl} });

export const getAuthUserData = () => async (dispatch) => {
  let response = await headerAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await headerAPI.login(email, password, rememberMe, captcha);

  if (response.data.resultCode === 0) {
    //success auth
    dispatch(getAuthUserData());
  } else {
    if(response.data.resultCode === 10){
      dispatch(getCaptchaUrl());
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: message }))
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl))
};

export const logout = () => async (dispatch) => {
  let response = await headerAPI.logout();
    
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
};


export default authReducer;