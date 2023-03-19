import { Card, Col, Row, Spin, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/lazy'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCourseById } from '../../store/reducers/ActionCreators';
const { Title } = Typography;

function CourseDetails() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [order, setOrder] = useState(0);
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
      <Row justify="center">
        {error 
          ? <h3>{JSON.stringify(error)}</h3>
          : isLoading 
          ? <Spin />
          : !course
          ? <div>No available course</div>
          : <Col style={{width: '300px'}}>
              <Card
              size="small"
              title={`${course?.title}`}
              cover={<ReactPlayer width={'100%'} playing={true} controls={true} url={`${course?.lessons[order].link}`} />}
            >
              <Meta
                title={`${String(course?.description)}`}
                description={
                  course?.lessons?.map(item => {
                    return <li 
                      key={item.id}
                      onClick={() => setOrder(item.order-1)}
                      style={{cursor: 'pointer', listStyleType: (order+1 === item.order ? 'circle' : 'none')}}
                    >
                      {item.status + ' ' + item.title}
                    </li>
                  })
                }
              />
            </Card>
          </Col>}
      </Row>
    </>
  );
}

export default CourseDetails;