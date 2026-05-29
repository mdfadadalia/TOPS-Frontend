import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const products = [
    {
        id: 1,
        image1: "/assets/img/product-1-1.jpg",
        image2: "/assets/img/product-1-2.jpg",
        badge: "Hot",
        badgeClass: "light-pink",
    },
    {
        id: 2,
        image1: "/assets/img/product-2-1.jpg",
        image2: "/assets/img/product-2-2.jpg",
        badge: "Hot",
        badgeClass: "light-green",
    },
    {
        id: 3,
        image1: "/assets/img/product-3-1.jpg",
        image2: "/assets/img/product-3-2.jpg",
        badge: "Hot",
        badgeClass: "light-orange",
    },
    {
        id: 4,
        image1: "/assets/img/product-4-1.jpg",
        image2: "/assets/img/product-4-2.jpg",
        badge: "Hot",
        badgeClass: "light-blue",
    },
    {
        id: 5,
        image1: "/assets/img/product-5-1.jpg",
        image2: "/assets/img/product-5-2.jpg",
        badge: "-30%",
        badgeClass: "light-blue",
    },
    {
        id: 6,
        image1: "/assets/img/product-6-1.jpg",
        image2: "/assets/img/product-6-2.jpg",
        badge: "-22%",
        badgeClass: "light-blue",
    },
];

const NewArrivals = () => {
    return (
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
                    slidesPerView={4}
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

                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="product__item">
                                <div className="product__banner">
                                    <a href="/" className="product__images">
                                        <img
                                            src={item.image1}
                                            alt=""
                                            className="product__img default"
                                        />

                                        <img
                                            src={item.image2}
                                            alt=""
                                            className="product__img hover"
                                        />
                                    </a>

                                    <div className="product__actions">
                                        <a href="/" className="action__btn">
                                            <i className="fi fi-rs-eye"></i>
                                        </a>

                                        <a href="/" className="action__btn">
                                            <i className="fi fi-rs-heart"></i>
                                        </a>

                                        <a href="/" className="action__btn">
                                            <i className="fi fi-rs-shuffle"></i>
                                        </a>
                                    </div>

                                    <div className={`product__badge ${item.badgeClass}`}>
                                        {item.badge}
                                    </div>
                                </div>

                                <div className="product__content">
                                    <span className="product__category">
                                        Clothing
                                    </span>

                                    <h3 className="product__title">
                                        Colorful Pattern Shirts
                                    </h3>

                                    <div className="product__rating">
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                    </div>

                                    <div className="product__price flex">
                                        <span className="new__price">
                                            $238.85
                                        </span>

                                        <span className="old__price">
                                            $245.8
                                        </span>
                                    </div>

                                    <a href="/" className="action__btn cart__btn">
                                        <i className="fi fi-rs-shopping-bag-add"></i>
                                    </a>
                                </div>
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
    );
};

export default NewArrivals;