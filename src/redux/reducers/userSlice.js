import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { loginCall, registerCall } from "../backendCalls/userEndpointCalls";

export const INPUT_NAME = "inputName";
export const INPUT_PASS = "inputPass";

export const performLogin = createAsyncThunk("user/performLogin", loginCall);
export const performRegister = createAsyncThunk(
  "user/performRegister",
  registerCall
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    inputs: { [INPUT_NAME]: "", [INPUT_PASS]: "" },
    user: null,
  },
  reducers: {
    handleInputChange: (state, action) => {
      state.inputs = {
        ...state.inputs,
        [action.payload.type]: action.payload.val,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(performLogin.pending, (state, action) => {
        state.loginStatus = "Logiranje u tijeku...";
      })
      .addCase(performLogin.fulfilled, (state, action) => {
        if (action.payload.user) {
          Object.assign(state, action.payload.user);
          state.token = action.payload.token;
          state.loginStatus = "Uspiješno ste se logirali";
        } else {
          state.loginStatus = "Unijeli ste pogrešnu lozinku ili username";
        }
      })
      .addCase(performLogin.rejected, (state, action) => {
        state.loginStatus = "Nešto nije u redu sa serverom. Pokušajte kasnije";
      })
      .addCase(performRegister.pending, (state, action) => {
        state.loginStatus = "Logiranje u tijeku...";
      })
      .addCase(performRegister.fulfilled, (state, action) => {
        if (action.payload.user) {
          Object.assign(state, action.payload.user);
          state.token = action.payload.token;
          state.loginStatus = "Uspiješno ste se logirali";
        } else {
          state.loginStatus = "Username ili email već postoji.";
        }
      })
      .addCase(performRegister.rejected, (state, action) => {
        state.loginStatus = "Nešto nije u redu sa serverom. Pokušajte kasnije";
      });
  },
});

export const { handleInputChange } = userSlice.actions;

export default userSlice.reducer;
