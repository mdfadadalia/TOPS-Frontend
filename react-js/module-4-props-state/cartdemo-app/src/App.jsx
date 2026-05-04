import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (<>
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto p-5 mt-5 card " align="center">
          <h1>Shoping Cart</h1>
          <hr />
          <div className="form-group gap-2 d-flex">
            <input type='text' placeholder='Enter Product' className='form-control' />
            <button className='btn btn-success'>Add</button>
          </div>
          <br />
          <div>
            <table className='table table-striped table-hover table-bordered shadow rounded'>
                <thead className="table-dark text-center">
                <tr>
                    <th>Product Name</th>
                    <th colSpan={2} align='center'>Action</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td> PEN </td>
                <td><button>Buy</button></td>
                <td><button>Remove</button></td>
              </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  </>)
}
export default App;
