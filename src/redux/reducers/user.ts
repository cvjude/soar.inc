// Redux is an overkill for this project, but I wanted to show how I would use it in a real project
// I'm using Redux Toolkit to simplify the Redux boilerplate

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStateData } from 'utils/types';

export const initialState: Partial<AuthStateData> = {
  user: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<Partial<AuthStateData>>) {
      if (!state.user) return;
      state.user = { ...state.user, ...action.payload };
    },
  },
});

const { actions, reducer } = user;
const { updateUser } = actions;

export { updateUser };

export default reducer;
