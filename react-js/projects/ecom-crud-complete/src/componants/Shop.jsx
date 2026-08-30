import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productSlice';
import { fetchCategories } from '../store/slices/categorySlice';
import ProductCard from './ProductCard';
import { DataState } from './common/DataState';

const SORT_OPTIONS = [
  { value: '', label: 'Default sorting' },
  { value: 'price_asc', label: 'Price: low to high' },
  { value: 'price_desc', label: 'Price: high to low' },
  { value: 'newest', label: 'Newest first' },
];

const Shop = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { items: products, pagination, loading, error } = useSelector((state) => state.products);
  const { items: categories } = useSelector((state) => state.categories);

  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sort') || '';
  const page = Number(searchParams.get('page') || 1);
  const [priceMax, setPriceMax] = useState(searchParams.get('maxPrice') || '');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchProducts({
        search: search || undefined,
        category: category || undefined,
        sort: sort || undefined,
        maxPrice: priceMax || undefined,
        page,
        limit: 12,
      }),
    );
  }, [dispatch, search, category, sort, priceMax, page]);

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    next.delete('page');
    setSearchParams(next);
  };

  const goToPage = (nextPage) => {
    const next = new URLSearchParams(searchParams);
    next.set('page', String(nextPage));
    setSearchParams(next);
  };

  const totalPages = pagination?.totalPages || 1;
  const totalCount = pagination?.total ?? products.length;

  const refetch = () =>
    dispatch(
      fetchProducts({
        search: search || undefined,
        category: category || undefined,
        sort: sort || undefined,
        maxPrice: priceMax || undefined,
        page,
        limit: 12,
      }),
    );

  const headline = useMemo(() => {
    if (search) return `Search results for "${search}"`;
    return null;
  }, [search]);

  return (
    <main className="main">
      {/*=============== BREADCRUMB ===============*/}
      <section className="breadcrumb">
        <ul className="breadcrumb__list flex container">
          <li>
            <Link to="/" className="breadcrumb__link">Home</Link>
          </li>
          <li><span className="breadcrumb__link">&gt;</span></li>
          <li><span className="breadcrumb__link">Shop</span></li>
        </ul>
      </section>
      {/*=============== PRODUCTS ===============*/}
      <section className="products container section--lg">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
          <p className="total__products mb-0">
            We found <span>{totalCount}</span> items {headline ? `for "${search}"` : 'for you!'}
          </p>
          <div className="d-flex flex-wrap gap-2">
            <select className="form__input" style={{ width: 190 }} value={category} onChange={(e) => updateParam('category', e.target.value)}>
              <option value="">All categories</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
            <select className="form__input" style={{ width: 190 }} value={sort} onChange={(e) => updateParam('sort', e.target.value)}>
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <input
              type="number"
              min="0"
              className="form__input"
              style={{ width: 150 }}
              placeholder="Max price"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              onBlur={(e) => updateParam('maxPrice', e.target.value)}
            />
          </div>
        </div>

        <DataState
          loading={loading}
          loadingLabel="Loading products…"
          error={error}
          onRetry={refetch}
          isEmpty={products.length === 0}
          emptyTitle="No products match these filters"
          emptyHint="Try adjusting your search, category or price range."
        >
          <div className="products__container grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </DataState>

        {totalPages > 1 && (
          <div className="d-flex justify-content-center gap-2 mt-4">
            <button className="btn btn--sm" disabled={page <= 1} onClick={() => goToPage(page - 1)}>
              Previous
            </button>
            <span className="align-self-center">
              Page {page} of {totalPages}
            </span>
            <button className="btn btn--sm" disabled={page >= totalPages} onClick={() => goToPage(page + 1)}>
              Next
            </button>
          </div>
        )}
      </section>
      {/*=============== NEWSLETTER ===============*/}
      <section className="newsletter section">
        <div className="newsletter__container container grid">
          <h3 className="newsletter__title flex">
            <img src="/assets/img/icon-email.svg" alt="" className="newsletter__icon" />
            Sign in to Newsletter
          </h3>
          <p className="newsletter__description">...and receive $25 coupon for first shopping.</p>
          <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter Your Email" className="newsletter__input" required />
            <button type="submit" className="newsletter__btn">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Shop;
