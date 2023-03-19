import React, { useEffect, FC, useState } from "react";
import { Col, Pagination, Row, Space, Spin, Typography } from "antd";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { fetchCourses } from '../../store/reducers/ActionCreators';
import { ICourse } from '../../models/ICourses'
import CourseItem from './CourseItem'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
const { Title } = Typography;

const CoursesList: FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const { courses, isLoading, error } = useAppSelector(state => state.coursesSlice);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  useEffect(() => {
    setTotalCount(Number(courses?.courses.length));
  }, [courses]);

  return (
    <div>
      <Row justify="center">
        <Typography>
          <Title level={2} data-testid="posts-page">Courses List</Title>
        </Typography>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          {error 
            ? <h3>{JSON.stringify(error)}</h3>
            : isLoading 
            ? <Spin />
            : !courses?.courses.length
            ? <div>No available courses</div>
            : <Space direction="vertical" size="small" style={{ display: 'flex', margin: '1rem 0' }}>
                <TransitionGroup>
                  {courses &&
                    courses.courses.slice((page-1)*10, page*10).map((course: ICourse) => (
                      <CSSTransition
                        key={course.id}
                        timeout={500}
                        classNames="postAnimation"
                      >
                        <CourseItem
                          course={course}
                        />
                      </CSSTransition>
                    ))
                  }
                </TransitionGroup>
              </Space>
          }
        </Col>
      </Row>
      <Row>
        <Col span={4} offset={10}>
          {!isLoading && <Pagination current={page} total={totalCount} onChange={(page) => setPage(page)} />}
        </Col>
      </Row>
    </div>
  );
};

export default CoursesList;
