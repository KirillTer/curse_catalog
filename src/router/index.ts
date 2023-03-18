import React from "react";
import Courses from "../pages/courses/Courses";
import CoursesDetails from "../pages/courses/CoursesDetails";

export interface IRoute {
  path: string;
  page: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  COURSES = '/courses',
  COURSEDETAILS = '/courses/:id',
  ANYPATH = '*'
}

export const routes: IRoute[] = [
  {path: RouteNames.COURSES, page: Courses},
  {path: RouteNames.COURSEDETAILS, page: CoursesDetails},
  {path: RouteNames.ANYPATH, page: Courses},
]