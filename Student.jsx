import propType from 'prop-types'

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent?"Yes":"No"}</p>
      <p>Place of Stay: {props.location}</p>
    
    </div>
  );
}

Student.propTypes ={
  name: propType.string,
  age: propType.number,
  isStudent: propType.bool,
  location: propType.string,
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
  location: "Location not provided"
}
export default Student;