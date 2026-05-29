
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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
export default function Category() {
    return <>
        <section className="categories container section">

            {/* TITLE + NAVIGATION */}

            <h3 className="section__title">
                <span>Popular</span> Categories
            </h3>
            <div className="categories__container swiper">

                {/* SWIPER */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
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
                    {categories.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="category__item">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="category__img"
                                />

                                <h3 className="category__title">
                                    {item.title}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                <div className="categories__buttons">
                    <div className="swiper-button-prev custom-swiper-btn">

                    </div>
                    <div className="swiper-button-next custom-swiper-btn">

                    </div>
                </div>
            </div>
        </section>
    </>
}
