import React,{useState} from "react";
import { Container,Row } from "react-bootstrap";
import data from "./Data";




function EmployeeData()
{
    const [empdata, setEmpData] = useState(data);
    const handelSearch = (e)=>{
    const value = e.target.value.toLowerCase();
        if(e.target.value=="")
            setEmpData(data)
        else        
            setEmpData(data.filter(item => item.name.toLowerCase().includes(value) ||
            item.name.toLowerCase().includes(value) ||
            item.section.toLowerCase().includes(value)
        ));
    }
    return <>
        <Container className="p-4 mt-5 mx-auto align-center  align-items-center">
            <h1>
                Employee Data <br/>
                <input type="text" placeholder="Write here to Filter..." className="float-end form-control" onChange={handelSearch}/>
            </h1>
            <hr/>
            <Row>
                {empdata && empdata.map((emp,index)=>{
                    return( <>
                        <div className="col-md-3 gap-4 p-4 m-4 mt-3 border rounded-2 bg-info">
                            <p className="float-start">{index}</p>
                            <p className="text-center"><img src={emp.pics} className="img-fluid" style={{width:"80%", height:"150px"}}/></p>
                            <p>ID:{emp.id}</p>
                            <p>Name:{emp.name}</p>
                            <p>Dept.:{emp.section}</p>
                            <p>Age.:{emp.year}</p>
                        </div>                        
                    </>)                    
                })}
            </Row>
        </Container>
        </>
}export default EmployeeData