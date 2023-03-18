import { Card, Col, Row, Spin, Typography } from 'antd';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCourseById } from '../../store/reducers/ActionCreators';
const { Title, Paragraph } = Typography;

function CourseDetails() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { course, isLoading, error } = useAppSelector(state => state.singleCourseSlice);

  useEffect(() => {
    dispatch(fetchCourseById(id as string));
  }, [dispatch, id]);

  return ( 
    <>
      <Row justify="center">
        <Typography>
          <Title level={2}>User Details</Title>
        </Typography>
      </Row>
      {isLoading && <Spin />}
      {error && <h1>{error}</h1>}
      {course && <Col span={6} offset={9}>
        <Card
        size="small"
        title={`${course?.id}. ${course?.title}`}
        >
          User email - {course?.description}
        </Card>
      </Col>}
    </>
  );
}

export default CourseDetails;