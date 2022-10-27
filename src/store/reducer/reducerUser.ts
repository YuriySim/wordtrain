import { createReducer } from '@reduxjs/toolkit';
import { addUserInfo, editUserInfo, removeUserInfo } from '../actions/actionsUser';

const initialState = {}

export default createReducer(initialState, {
  [addUserInfo.type]: (user, action) => {
    //const { email, name, uid } = action.payload;
    //console.log('Workkk')
    // user = {
    //   ...action.payload
    // }
  },
  [editUserInfo.type]: (user, action) => {
    user = {
      ...user,
      ...action.payload
    }
  },
  [removeUserInfo.type]: (user: any, action) => {
    for(var key in user) {
      delete user[key]
    }
  }
})