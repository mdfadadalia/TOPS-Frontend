
 import Employee from "./viewEmp";
 import './App.css';
function App()
{
  return (
    <>
      <h1>Employee Data</h1> 
      <div className="emp_frame">
        <Employee name="Mayur Patel" empno={12167} desig="IT Manager" salary={95000} /> 
        <Employee name="Amit Shah" empno={12168} desig="Developer" salary={85000} />
        <Employee name="Priya Singh" empno={12169} desig="HR Executive" salary={65000} />
        <Employee name="Rahul Mehta" empno={12170} desig="QA Engineer" salary={70000} />
        <Employee name="Sneha Desai" empno={12171} desig="UI Designer" salary={72000} />
        <Employee name="Vikas Kumar" empno={12172} desig="Backend Developer" salary={88000} />
        <Employee name="Neha Joshi" empno={12173} desig="Frontend Developer" salary={83000} />
        <Employee name="Rohit Verma" empno={12174} desig="DevOps Engineer" salary={90000} />
        <Employee name="Anjali Rao" empno={12175} desig="Business Analyst" salary={78000} />        
      </div>     
    </>
  )
} export default App;