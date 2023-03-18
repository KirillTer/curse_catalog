import { combineReducers, configureStore } from "@reduxjs/toolkit"
import coursesSlice from './reducers/CoursesSlice'
import singleCourseSlice from './reducers/SingleCourseSlice'
import authSlice from './reducers/AuthSlice'

const rootReducer = combineReducers({
  coursesSlice,
  singleCourseSlice,
  authSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(),
  });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']