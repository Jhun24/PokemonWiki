import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/Presentation/Redux/store';

type UserType = {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
};

const initialState: UserType = {
  email: '',
  firstName: '',
  gender: '',
  id: 0,
  image: '',
  lastName: '',
  token: '',
  username: '',
};

const userReducer = createSlice({
  name: 'UserReducer',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state = action.payload;
    },
  },
});

export const { setUser } = userReducer.actions;
export const seletcUser = (state: RootState) => state.user;
export default userReducer.reducer;
