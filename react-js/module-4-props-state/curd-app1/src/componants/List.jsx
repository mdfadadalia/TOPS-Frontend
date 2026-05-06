export const List = ({ ele,deleteData,editHandler }) => {
    return <tr>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td>
                    <button className="btn btn-warning btn-sm" onClick={(e)=>editHandler(ele)}>Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger btn-sm" onClick={(e)=>deleteData(ele.username)}>Delete</button>
                </td>
            </tr>
}