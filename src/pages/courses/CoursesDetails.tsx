import { Card, Col, Row, Spin, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCourseById } from '../../store/reducers/ActionCreators';
const { Title } = Typography;

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
          <Title level={2}>Course Details</Title>
        </Typography>
      </Row>
      {error 
        ? <h3>{JSON.stringify(error)}</h3>
        : isLoading 
        ? <Spin />
        : !course
        ? <div>No available course</div>
        : <Col span={6} offset={9}>
            <Card
            size="small"
            title={`${course?.title}`}
            cover={<img style={{width: '300px'}} alt="example" src={`${course?.previewImageLink}/cover.webp`} />}
          >
            <Meta
              title={`${String(course?.description)}`}
              description={
                course?.lessons?.map(item => {
                  return <li key={item.id}>{item.title}</li>
                })
              }
            />
          </Card>
        </Col>}
    </>
  );
}

export default CourseDetails;