import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/Presentation/Redux/store';

type DetailType = {
  id: number;
  type: string;
};

const initialState: DetailType = {
  id: 0,
  type: "",
};

const detailReducer = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setDetail: (state: DetailType, action: PayloadAction<DetailType>) => {
      state.id = action.payload.id;
      state.type = action.payload.type;
    },
  },
});

export const { setDetail } = detailReducer.actions;
export const selectDetail = (state: RootState) => state.detail;
export default detailReducer.reducer;