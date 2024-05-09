import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: null,
  userJwt: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload
    },
    setUserJwt(state, action) {
      state.userJwt = action.payload
    },
    quitUser(state) {
      state.userData = null
      state.userJwt = null
    }
  },
})

export const { setUserData, setUserJwt, quitUser } = userSlice.actions

export default userSlice.reducer