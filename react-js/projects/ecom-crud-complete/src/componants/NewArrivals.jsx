import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestProducts } from '../store/slices/productSlice';
import ProductCard from './ProductCard';
import { LoadingState, ErrorState } from './common/DataState';

import 'swiper/css';
import 'swiper/css/navigation';

const NewArrivals = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.latest);
  const loading = useSelector((state) => state.products.loadingLatest);
  const error = useSelector((state) => state.products.latestError);

  useEffect(() => {
    dispatch(fetchLatestProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="new__arrivals container section">
        <LoadingState label="Loading new arrivals…" compact />
      </section>
    );
  }

  if (error) {
    return (
      <section className="new__arrivals container section">
        <ErrorState message={error} onRetry={() => dispatch(fetchLatestProducts())} />
      </section>
    );
  }

  if (!products.length) return null;

  return (
    <section className="new__arrivals container section">
      <h3 className="section__title">
        <span>New</span> Arrivals
        <div className="d-flex float-end gap-3">
          <div className="swiper-button-prev1 justify-content-center align-items-center">
            <i className="fi fi-rs-angle-left" />
          </div>
          <div className="swiper-button-next1 justify-content-center align-items-center">
            <i className="fi fi-rs-angle-right" />
          </div>
        </div>
      </h3>
      <div className="new__container swiper">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: '.swiper-button-next1', prevEl: '.swiper-button-prev1' }}
            spaceBetween={24}
            slidesPerView={4}
            breakpoints={{ 320: { slidesPerView: 1 }, 576: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } }}
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard product={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
