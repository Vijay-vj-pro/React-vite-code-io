import Course from './Course'
import html from './assets/course5.png'
import css from './assets/course1.png'
import js from './assets/course2.png'
import py from './assets/course7.png'
import java from './assets/course6.png'

function CourseList() {
    
    const courses = [
        {
            name: "HTML full course",
            price: 199,
            image: html,
            rating: 4.8
        },
        {
            name: "CSS full course",
            price: 199,
            image: css,
            rating: 4.7
        },
        {
            name: "JavaScript full course",
            price: 499,
            image: js,
            rating: 4.6
        },
        {
            name: "Python crash course",
            price: 899,
            image: py,
            rating:  4.7
        },
        {
            name: "Core Java course",
            price: 999,
            image: java,
            rating: 4.8
        },
        {
            name: "HTML full course",
            price: 199,
            image: html,
            rating: 4.8
        },
        {
            name: "CSS full course",
            price: 199,
            image: css,
            rating: 4.7
        },
        {
            name: "JavaScript full course",
            price: 499,
            image: js,
            rating: 4.6
        },
        {
            name: "Python crash course",
            price: 899,
            image: py,
            rating:  4.7
        },
        {
            name: "Core Java course",
            price: 999,
            image: java,
            rating: 4.8
        }
    ]
    
    const coursesList = courses.map(
    (course) => <Course name = {course.name} price = {course.price} image = {course.image} rating = {course.rating} />    
    )

    return(
        <>
            {coursesList}
        </>
    );
}

export default CourseList