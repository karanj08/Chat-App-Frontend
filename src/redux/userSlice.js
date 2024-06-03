import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authuser: null,
    otherusers: null,
    selecteduser: null,
    searchuser: [],
    onlineusers: null,
  },
  reducers: {
    setAuthuser: (state, action) => {
      state.authuser = action.payload;
    },
    setotherusers: (state, action) => {
      state.otherusers = action.payload;
    },
    setSelecteduser: (state, action) => {
      state.selecteduser = action.payload;
    },
    setsearchuser: (state, action) => {
      state.searchuser = action.payload;
    },
    setonlineuser: (state, action) => {
      state.onlineusers = action.payload;
    },
  },
});

export const {
  setAuthuser,
  setotherusers,
  setSelecteduser,
  setsearchuser,
  setonlineuser,
} = userSlice.actions;
export default userSlice.reducer;
