
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../store/slices/categorySlice";
import { LoadingState, ErrorState } from "./common/DataState";

const Category = () => {
  const category = useSelector((state) => state.categories)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  if (category.loading) {
    return (
      <section className="categories container section">
        <LoadingState label="Loading categories…" />
      </section>
    )
  }
  if (category.error) {
    return (
      <section className="categories container section">
        <ErrorState message={category.error} onRetry={() => dispatch(fetchCategories())} />
      </section>
    )
  }
  if (!category.items.length) return null
  return <>
    <section className="categories container section">
      <h3 className="section__title"><span>Popular</span> Categories
        <div className="d-flex float-end gap-3">
          <div className="swiper-button-prev2 justify-content-center align-items-center">
            <i className="fi fi-rs-angle-left"></i>
          </div>
          <div className="swiper-button-next2 justify-content-center align-items-center">
            <i className="fi fi-rs-angle-right"></i>
          </div>
        </div>
      </h3>
      <div className="categories__container swiper">

        <div className="swiper-wrapper">
          {/* SWIPER */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next2",
              prevEl: ".swiper-button-prev2",
            }}
            spaceBetween={24}
            slidesPerView={6}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },

              576: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 3,
              },

              992: {
                slidesPerView: 4,
              },

              1200: {
                slidesPerView: 6,
              },
            }}
          >
            

            {category.items.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`/shop?category=${item.id}`} className="category__item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="category__img"
                  />
                  <h3 className="category__title">
                    {item.name}
                  </h3>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </section>
  </>
}
export default Category
