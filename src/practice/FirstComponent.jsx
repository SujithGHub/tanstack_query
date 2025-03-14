import React, { useState } from 'react';
import { useStore } from 'zustand';
import useZustandStore from '../zust-store/Store';

const FirstComponent = () => {

  const [course, setCourse] = useState({});
  const { courses, addCourse, toggleCourseCompletion } = useStore(useZustandStore);

  const handleSubmit = (event) => {
    event.preventDefault();
    course.name && addCourse(course);
    setCourse({})
  }

  return (
    // <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', cursor: 'pointer', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
    //   {new Array(100).fill(0).map((_, index) => <Card key={index} item={index + 1} />)}
    // </div>
    // <Products />
    <form onSubmit={(event) => handleSubmit(event)}>
      <input required className='border-red-200 h-8 border-2' value={course?.name || ''} type="text" name="name" id="course-name" onChange={(event) => setCourse(prev => ({ ...prev, name: event?.target?.value }))} />
      <button className='button-normal' type="submit">Add Course</button>
      {courses.map((course, index) => (
        <div key={index} className='flex gap-3' >
          <h2 className='w-1/4 whitespace-nowrap'>{course?.name}</h2>
          <input required checked={course.isCompleted} type="checkbox" name="isCompleted" id="course-completion" onChange={() => toggleCourseCompletion(course.id)} />
          <span>{course.isCompleted ? 'Completed' : 'Pending'}</span>
        </div>
      ))}
    </form>
  )
}

export default FirstComponent;