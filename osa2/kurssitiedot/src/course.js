const Course = ({ name, parts }) => {
    return (
      <div>
        <Header name={name} />
        <Content parts={parts} />
        <Total parts={parts} /> 
      </div>
    )
  }
  
  const Header = ({ name }) => {
    return (
      <div>
        <h2>
          {name}
        </h2>
      </div>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} name={part.name} exercises={part.exercises}/>
          )}
      </div>
    )
  }
  
  const Part = ({name, exercises}) => {
    return (
      <p>{name} {exercises}</p>
    )
  }
  
  const Total = ({parts}) => {
    const total = parts.reduce((previous, current) =>
     previous + current.exercises, 0)
    return (
    <div>
      <strong>total of {total} exercises</strong>
    </div>
    )
  }

export default Course