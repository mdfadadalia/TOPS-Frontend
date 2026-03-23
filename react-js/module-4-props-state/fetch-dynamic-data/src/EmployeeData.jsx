import React from "react";
import { Container,Row,Button } from "react-bootstrap";
import data from "./Data";
function EmployeeData()
{
    return <>
        <Container className="p-5 mt-5 mx-auto">
            <h1>
                Employee Data 
                <Button className="float-end">Add New</Button>
            </h1>
            <hr/>
            <Row>
                {data && data.map((emp,index)=>{
                    return( <>
                        <div className="col-md-3 gap-5 m-4 mt-3 border">
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