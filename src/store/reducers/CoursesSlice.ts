import { ICourses } from '../../models/ICourses';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCourses } from './ActionCreators';


interface CoursesState {
  courses: ICourses | null;
  isLoading: boolean;
  error: string;
}

const initialState: CoursesState = {
  courses: null,
  isLoading: false,
  error: '',
}

export const coursesSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCourses.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCourses.fulfilled.type]: (state, action: PayloadAction<CoursesState>) => {
      state.isLoading = false;
      state.error = "";
      state.courses = action.payload.courses;
    },
    [fetchCourses.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export default coursesSlice.reducer;