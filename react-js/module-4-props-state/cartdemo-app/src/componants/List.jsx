export const List = ({ele}) => {
    return <>
        <tr>
            <td> {ele} </td>
            <td><button className='btn btn-primary'>Buy</button></td>
            <td><button className='btn btn-danger'>Delete</button></td>
        </tr>
    </>
}