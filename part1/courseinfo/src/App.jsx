const Header = ({props}) => {
    console.log(props)
    return (
        <>
            {props.course}
        </>
    )
}

const Content = ({course}) => {
    let parts = course["parts"]
    const [part1, part2, part3] = parts

    return (
        <>
            <Part part={part1.name} exercises={part1.exercises}/>
            <Part part={part2.name} exercises={part2.exercises}/>
            <Part part={part3.name} exercises={part3.exercises}/>
        </>
    )
}

const Part = ({part, exercises}) => {
    return (
        <>
            {part} {exercises}
        </>
    )
}

const Total = ({course}) => {
    let total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    return (
        <>
            <p>Number of exercises {total}</p>
        </>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    return (
        <div>
            <Header name={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </div>
    )
}

export default App