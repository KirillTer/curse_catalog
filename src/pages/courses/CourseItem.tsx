import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Link } from 'react-router-dom';
import React, { FC } from 'react';
import { ICourse } from "../../models/ICourses";


interface CourseItemProps {
  course: ICourse;
}

const CourseItem: FC<CourseItemProps> = ({ course }) => {

  return (
    <>
      <Card
        hoverable
        style={{margin: '20px'}}
        cover={<img style={{width: '300px'}} alt="example" src={`${course?.previewImageLink}/cover.webp`} />}
        title={course?.title}
        extra={<Link to={`/courses/${course?.id}`}>Details</Link>}
      >
        <Meta
          title={`Lessons Count - ${String(course?.lessonsCount)} Rating - ${String(course?.rating)}`}
          description={
            course?.meta?.skills?.map(item => {
              return <li key={item}>{item}</li>
            })
          }
        />
      </Card>
    </>
  );
};

export default CourseItem;