import axios from 'axios';
import { IAuthResponse } from '../../models/IAuth';
import { ICourses } from '../../models/ICourses';
import { ISingleCourse } from '../../models/ISingleCourse';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const BASE_USER_URL = `${process.env.REACT_APP_API_URL}`
export const BASE_AUTH_URL = `${process.env.REACT_APP_API_URL}/auth/anonymous?platform=subscriptions`

const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_USER_URL
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
})

export const fetchCourses = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await $api.get<ICourses[]>(
        '/core/preview-courses'
      );
      return {courses: response.data};
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCourseById = createAsyncThunk(
  'user/fetchOneUser',
  async (id: string, thunkAPI) => {
    try {
      const response = await $api.get<ISingleCourse>(
        `/core/preview-courses/${id}`
      );
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refreshUser',
  async (_, thunkAPI) => {
    try {
      const response = await $api.get<IAuthResponse>(
        BASE_AUTH_URL,
        {withCredentials: true}
      );
      localStorage.setItem('token', response.data.token)
      return response.data;
    } catch (e: any) {
      localStorage.removeItem('token')
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);