import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/Presentation/Redux/store';
import UserEntity from '@/Domain/Entity/user';

type UserType = {
  userEntity: UserEntity | null;
};

const initialState: UserType = {
  userEntity: null
}
const userReducer = createSlice({
  name: 'UserReducer',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserEntity>) => {
      state = new UserEntity(action.payload);
    },
  },
});

export const { setUser } = userReducer.actions;
export const seletcUser = (state: RootState) => state.user;
export default userReducer.reducer;
