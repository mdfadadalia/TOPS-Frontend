import Student from "./Student";
function Callback_App() 
{
  function showMsg(name) 
  {
    alert(name);
  }

  return (
    <div>
      Parent Components -    
      <Student name="Mayur" click={showMsg} />
    </div>
  );
}export default Callback_App;