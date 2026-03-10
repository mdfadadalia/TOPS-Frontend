const a = 200;
const b = 100; 
function CalcApp()
{
  return(<div>
    <h1>A : {a}, B : {b}</h1>
    <hr />
    <h1>Addision is  : {a+b} </h1>
    <h1>Multiplication is  : {a*b} </h1>
    <h1>Division is  : {a/b} </h1>
    <h1>Substraction is  : {a-b} </h1>
  </div>);
} export default CalcApp;