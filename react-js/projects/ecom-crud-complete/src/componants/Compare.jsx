import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompare, removeCompareItem } from '../store/slices/compareSlice';
import { formatCurrency } from '../utils/normalize';
import { EmptyState } from './common/DataState';

const ROWS = [
  { key: 'price', label: 'Price', render: (p) => formatCurrency(p.price) },
  { key: 'category', label: 'Category', render: (p) => p.category || '—' },
  { key: 'brand', label: 'Brand', render: (p) => p.brand || '—' },
  { key: 'rating', label: 'Rating', render: (p) => `${p.rating || 0} / 5` },
  { key: 'stock', label: 'Availability', render: (p) => (p.inStock ? `${p.stock} in stock` : 'Out of stock') },
  { key: 'description', label: 'Description', render: (p) => p.description || '—' },
];

export const Compare = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.compare.items);

  return (
    <main className="main">
      {/*=============== BREADCRUMB ===============*/}
      <section className="breadcrumb">
        <ul className="breadcrumb__list flex container">
          <li><Link to="/" className="breadcrumb__link">Home</Link></li>
          <li><span className="breadcrumb__link">&gt;</span></li>
          <li><span className="breadcrumb__link">Compare</span></li>
        </ul>
      </section>
      <section className="cart section--lg container">
        {items.length === 0 ? (
          <EmptyState
            title="Nothing to compare yet"
            hint="Add products to compare them side by side. Use the compare icon on any product card."
            icon="fi-rs-shuffle"
            action={<Link to="/shop" className="btn1 flex btn1__md"><i className="fi-rs-shopping-bag" /> Browse Products</Link>}
          />
        ) : (
          <>
            <div className="d-flex justify-content-end mb-2">
              <a href="#" className="btn btn--sm" onClick={(e) => { e.preventDefault(); dispatch(clearCompare()); }}>
                Clear All
              </a>
            </div>
            <div className="table__container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    {items.map((product) => (
                      <th key={product.id}>
                        <img src={product.images?.[0]} alt="" className="table__img" style={{ display: 'block', margin: '0 auto 8px' }} />
                        <Link to={`/details/${product.id}`}>{product.name}</Link>
                        <div>
                          <i
                            className="fi fi-rs-trash table__trash"
                            style={{ cursor: 'pointer' }}
                            onClick={() => dispatch(removeCompareItem(product.id))}
                          />
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr key={row.key}>
                      <td><strong>{row.label}</strong></td>
                      {items.map((product) => (
                        <td key={product.id}>{row.render(product)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Compare;
