function Student(props) 
{
  return (
    <>
     Child Components
    <button onClick={() => props.click(props.name + "  Child Compunents")}>
      Click to Call Parent Components
    </button>
    </>
  );
} export default Student;