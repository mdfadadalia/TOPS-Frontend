

function result(operation)
{
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;        
    let c ;
    switch(operation)
    {
        case "+":
            c =  Number(a) + Number(b); 
            break;
        case "-":
            c =  Number(a) - Number(b); 
            break;
        case "*":
            c =  Number(a) * Number(b); 
            break;
        case "/":
            c =  Number(a) / Number(b); 
            break;
    }
    document.getElementById("c").value = c;   
}
function CalcApp()
{
    return <div className="calc_div">
                <input type="text" id="a"   />
                <input type="text" id="b"  />= 
                <input type="text" id="c" readOnly/>
                <br/>
                <input type="button" value="+" onClick={() => result("+")} />
                <input type="button" value="-" onClick={() => result("-")} />
                <input type="button" value="*" onClick={() => result("*")} />
                <input type="button" value="/" onClick={() => result("/")} />                  
            </div>;
} export default CalcApp;
