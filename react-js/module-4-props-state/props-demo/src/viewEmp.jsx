
function Employee(props)
{
    return(<> 
        <div className="emp_grid">
            <p><b>Name : </b> {props.name}</p>
            <p><b>EmpNo : </b> {props.empno}</p>
            <p><b>Desig. : </b> {props.desig}</p>
            <p><b>Salary : </b> {props.salary}</p> 
        </div>               
    </>)
} export default Employee;