import { IAuthResponse } from '../../models/IAuth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { refreshUser } from './ActionCreators';

interface UserState {
  isAuth: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  isAuth: false,
  isLoading: false,
  error: '',
}

export const authSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: {
    [refreshUser.pending.type]: (state) => {
      state.isLoading = true
      state.error = ""
      state.isAuth = false
    },
    [refreshUser.fulfilled.type]: (state, action: PayloadAction<IAuthResponse>) => {
      state.isLoading = false
      state.error = ""
      state.isAuth = true
    },
    [refreshUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
      state.isAuth = false
    },
  },
});

export default authSlice.reducer;