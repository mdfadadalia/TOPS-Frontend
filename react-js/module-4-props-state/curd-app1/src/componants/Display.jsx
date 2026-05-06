
import { List } from "./List"

export const Display = ({userData, deleteData, editHandler}) => {
    return <div className="col-md-8">
              <div className="card shadow-sm p-4">
                <h3 className="text-center mb-4">User List</h3>
                <div className="table-responsive">
                  <table className="table table-bordered table-hover align-middle text-center">
                    <thead>
                      <tr>                        
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th colSpan={2}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.map((ele,index)=>(<List key={index} ele={ele} deleteData={deleteData} editHandler={editHandler}  />))}                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
}