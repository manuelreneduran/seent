import * as actionTypes from '../constants/actionTypes';

export function setShowLoginModal(payload) {
  return { type: actionTypes.SHOW_LOGIN_MODAL, payload: !payload }
};

export function setShowContactModal(payload) {
  return { type: actionTypes.SHOW_CONTACT_MODAL, payload: !payload }
}

export function setShowRegisterModal(payload) {
  return { type: actionTypes.SHOW_REGISTER_MODAL, payload: !payload }
}

export function setUser(payload) {
  return { type: actionTypes.USER, payload}
}

export function setUserAlreadyExists(payload) {
  return { type: actionTypes.USER_ALREADY_EXISTS, payload}
}

export function setLoginError(payload) {
  return { type: actionTypes.LOGIN_ERROR, payload}
}

export function setUsername(payload) {
  return { type: actionTypes.USERNAME, payload}
}

export function setPassword(payload) {
  return { type: actionTypes.PASSWORD, payload}
}

export function setPasswordConf(payload) {
  return { type: actionTypes.PASSWORD_CONF, payload}
}

export function setPasswordMatch(payload) {
  return { type: actionTypes.PASSWORD_MATCH, payload}
}

export function setLoggedIn(payload) {
  return { type: actionTypes.LOGGED_IN, payload}
}