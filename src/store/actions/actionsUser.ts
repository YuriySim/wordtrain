import { createAction } from '@reduxjs/toolkit';

export const addUserInfo    = createAction('ADD_USER', function prepare(user) {
  return {...user}
})
export const editUserInfo   = createAction('EDIT_USER')
export const removeUserInfo = createAction('REMOVE_USER')