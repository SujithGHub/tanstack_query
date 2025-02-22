import { create, createStore } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const courseStore = ((set) => ({
  courses: [],
  addCourse: (course) => {
    const id = Math.ceil(Math.random() * 100_000_000);
    (set(state => ({
        courses: [...state.courses, { ...course, id: id, name: course?.name, isCompleted: false }]
      })))
  },
  toggleCourseCompletion: (courseId) => {
    (set(state => ({
      courses: state.courses.map(course => course.id === courseId ? { ...course, isCompleted: !course.isCompleted } : course)
    })))
  }
}))


const useCourseStore = create(
  devtools(persist(courseStore, {
    name: 'courses',
    storage: createJSONStorage(() => localStorage)
  }))
)

export default useCourseStore;