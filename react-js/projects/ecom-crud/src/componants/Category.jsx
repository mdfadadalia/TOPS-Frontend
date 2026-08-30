
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../store/slices/categorySlice";

const categories = [
  {
    id: 1,
    title: "Shoes",
    image: "/assets/img/category-5.jpg",
  },
  {
    id: 2,
    title: "Pillowcase",
    image: "/assets/img/category-6.jpg",
  },
  {
    id: 3,
    title: "Jumpsuit",
    image: "/assets/img/category-7.jpg",
  },
  {
    id: 4,
    title: "Hats",
    image: "/assets/img/category-8.jpg",
  },
  {
    id: 5,
    title: "T-Shirt",
    image: "/assets/img/category-1.jpg",
  },
  {
    id: 6,
    title: "Bags",
    image: "/assets/img/category-2.jpg",
  },
  {
    id: 7,
    title: "Hats",
    image: "/assets/img/category-8.jpg",
  },
  {
    id: 8,
    title: "T-Shirt",
    image: "/assets/img/category-1.jpg",
  },
  {
    id: 9,
    title: "Bags",
    image: "/assets/img/category-2.jpg",
  },
];
const Category = () => {
  const category = useSelector((state) => state.categories)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])
  
  if(category.loading)
    {return <h2>Loadinig . . . </h2>}  
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
            

            {category.items.map((item,index) => (
              <SwiperSlide key={index}>
                <div className="category__item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="category__img"
                  />
                  <h3 className="category__title">
                    {item.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </section>
  </>
}
export default Category
