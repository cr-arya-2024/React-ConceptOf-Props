import propTypes from 'prop-types'
function Student(props){
return(
    <div className="div1">
    <p>name:{props.name}</p>
    <p>age:{props.age}</p>
</div>
)
}
Student.propTypes={
name:propTypes.string,
age:propTypes.number
}
Student.defaultProps={
    name:"guest",
    age:0
}
export default Student