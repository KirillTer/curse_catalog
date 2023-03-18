import { ISingleCourse } from '../../models/ISingleCourse';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCourseById } from './ActionCreators';


interface CourseState {
  course: ISingleCourse | null;
  isLoading: boolean;
  error: string;
}

const initialState: CourseState = {
  course: null,
  isLoading: false,
  error: '',
}

export const singleCourseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCourseById.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCourseById.fulfilled.type]: (state, action: PayloadAction<ISingleCourse>) => {
      state.isLoading = false;
      state.error = "";
      state.course = action.payload;
    },
    [fetchCourseById.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export default singleCourseSlice.reducer;