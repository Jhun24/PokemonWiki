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

// password: '0lelplR',
// username: 'kminchelle',

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserType, action: PayloadAction<UserType>) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.gender = action.payload.gender;
      state.id = action.payload.id;
      state.image = action.payload.image;
      state.lastName = action.payload.lastName;
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
  },
});

export const { setUser } = userReducer.actions;
export const seletcUser = (state: RootState) => state.user;
export default userReducer.reducer;
