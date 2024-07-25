import { createSlice } from "@reduxjs/toolkit";

const googleSigninSlice = createSlice({
  name: "googleSignin",
  initialState: {
    isSignedIn: false,
    user: null,
    error: null,
    loading: null,
  },
  reducers: {
    signInStart: (state) => {
      state.loading = true; // Set loading to true
      state.error = null; // Clear previous errors
    },
    signInSuccess: (state, action) => {
      console.log("signInSuccess Payload:", action.payload);
      state.isSignedIn = true;
      state.user = {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        email: action.payload.email,
        photoURL: action.payload.photoURL,
        credits: 300,
      };
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.isSignedIn = false;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.isSignedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, signOut } =
  googleSigninSlice.actions;
export default googleSigninSlice.reducer;
