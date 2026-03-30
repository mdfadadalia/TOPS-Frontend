import { useState } from "react";
import Data from "./Data";

function ProductFilter() {
  const [filter, setFilter] = useState(Data);

  const FilterData = (cat) => {
    const result = Data.filter((items) => items.category == cat);
    setFilter(result);
  };

  const handelSerch = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") AllData();
    else
      setFilter(
        filter.filter(
          (item) =>
            item.name.toLowerCase().includes(value) ||
            item.category.toLowerCase().includes(value)
        )
      );
  };

  const AllData = () => {
    setFilter(Data);
  };

  return (
    <>
      <div className="container py-4">

        {/* 🔹 Title + Search */}
        <div className="row mb-3 align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold">#Product Search & Filter</h2>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={handelSerch}
            />
          </div>
        </div>

        <hr />

        {/* 🔹 Buttons */}
        <div className="mb-3 text-center">
          <button className="btn btn-primary m-1" onClick={AllData}>
            All
          </button>

          {[...new Set(Data.map((item) => item.category))].map((cat, index) => (
            <button
              key={index}
              className="btn btn-outline-primary m-1"
              onClick={() => FilterData(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔹 Product Grid */}
        <div className="row">
          {filter.map((items, index) => {
            return (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card h-100 shadow-sm text-center p-2">
                  
                  <img
                    src={items.photo}
                    alt="photo"
                    className="card-img-top img-fluid"
                    style={{ height: "150px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{items.name}</h5>
                    <p className="card-text">
                      <b>Category:</b> {items.category}
                    </p>
                    <p className="text-success fw-bold">Rs. {items.price}</p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
}

export default ProductFilter;