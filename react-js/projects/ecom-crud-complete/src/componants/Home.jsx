import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFeaturedProducts, fetchLatestProducts } from '../store/slices/productSlice'
import NewArrivals from './NewArrivals';
import Category from "./Category";
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { LoadingState, ErrorState, EmptyState } from './common/DataState';
const Home = () => {
    const dispatch = useDispatch()
    const featured = useSelector((state) => state.products.featured)
    const latest = useSelector((state) => state.products.latest)
    const loadingFeatured = useSelector((state) => state.products.loadingFeatured)
    const loadingLatest = useSelector((state) => state.products.loadingLatest)
    const featuredError = useSelector((state) => state.products.featuredError)
    const latestError = useSelector((state) => state.products.latestError)
    const [tab, setTab] = useState('featured')
    useEffect(() => {
        dispatch(fetchFeaturedProducts())
        dispatch(fetchLatestProducts())
    }, [dispatch])
    const popular = useMemo(() => [...featured].sort((a, b) => b.rating - a.rating), [featured])
    const activeProducts = tab === 'popular' ? popular : tab === 'new-added' ? latest : featured
    const activeLoading = tab === 'new-added' ? loadingLatest : loadingFeatured
    const activeError = tab === 'new-added' ? latestError : featuredError
    const retryActiveTab = () => dispatch(tab === 'new-added' ? fetchLatestProducts() : fetchFeaturedProducts())
    return <>
        <main className="main">
            {/*=============== HOME ===============*/}
            <section className="home section--lg">
                <div className="home__container container grid">
                    <div className="home__content">
                        <span className="home__subtitle">Hot Promotions</span>
                        <h1 className="home__title">
                            Fashion Trending <span>Great Collection</span>
                        </h1>
                        <p className="home__description">
                            Save more with coupons &amp; up tp 20% off
                        </p>
                        <Link to="shop" className="btn1">
                            Shop Now
                        </Link>
                    </div>
                    <img src="assets/img/home-img.png" className="home__img" alt="hats" />
                </div>
            </section>
            {/*=============== CATEGORIES ===============*/}
            <Category />
            {/*=============== PRODUCTS ===============*/}
            <section className="products container section">
                <div className="tab__btns">
                    <span className={`tab__btn${tab === 'featured' ? ' active-tab' : ''}`} onClick={() => setTab('featured')}>
                        Featured
                    </span>
                    <span className={`tab__btn${tab === 'popular' ? ' active-tab' : ''}`} onClick={() => setTab('popular')}>
                        Popular
                    </span>
                    <span className={`tab__btn${tab === 'new-added' ? ' active-tab' : ''}`} onClick={() => setTab('new-added')}>
                        New Added
                    </span>
                </div>
                <div className="tab__items">
                    <div className="tab__item active-tab">
                        {activeLoading ? (
                            <LoadingState label="Loading products…" compact />
                        ) : activeError ? (
                            <ErrorState message={activeError} onRetry={retryActiveTab} />
                        ) : activeProducts.length === 0 ? (
                            <EmptyState title="No products yet" hint="Check back soon — new items are on the way." />
                        ) : (
                            <div className="products__container grid">
                                {activeProducts.map((item) => (
                                    <ProductCard key={item.id} product={item} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/*=============== DEALS ===============*/}
            <section className="deals section">
                <div className="deals__container container grid">
                    <div className="deals__item">
                        <div className="deals__group">
                            <h3 className="deals__brand">Deals of the Day</h3>
                            <span className="deals__category">Limited quantities</span>
                        </div>
                        <h4 className="deals__title">Summer Collection New Modern Design</h4>
                        <div className="deals__price flex">
                            <span className="new__price">$139.00</span>
                            <span className="old__price">$160.99</span>
                        </div>
                        <div className="deals__group">
                            <p className="deals__countdown-text">Hurry Up! Offer Ends In:</p>
                            <div className="countdown">
                                <div className="countdown__amount">
                                    <p className="countdown__period">02</p>
                                    <span className="unit">Days</span>
                                </div>
                                <div className="countdown__amount">
                                    <p className="countdown__period">22</p>
                                    <span className="unit">Hours</span>
                                </div>
                                <div className="countdown__amount">
                                    <p className="countdown__period">57</p>
                                    <span className="unit">Mins</span>
                                </div>
                                <div className="countdown__amount">
                                    <p className="countdown__period">28</p>
                                    <span className="unit">Sec</span>
                                </div>
                            </div>
                        </div>
                        <div className="deals__btn">
                            <a href="details.html" className="btn btn--md">
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div className="deals__item">
                        <div className="deals__group">
                            <h3 className="deals__brand">Women Clothing</h3>
                            <span className="deals__category">Shirts &amp; Bag</span>
                        </div>
                        <h4 className="deals__title">Try Something new on vacation</h4>
                        <div className="deals__price flex">
                            <span className="new__price">$178.00</span>
                            <span className="old__price">$256.99</span>
                        </div>
                        <div className="deals__group">
                            <p className="deals__countdown-text">Hurry Up! Offer Ends In:</p>
                            <div className="countdown">
                                <div className="countdown__amount">
                                    <p className="countdown__period">02</p>
                                    <span className="unit">Days</span>
                                </div>
                                <div className="countdown__amount">
                                    <p className="countdown__period">22</p>
                                    <span className="unit">Hours</span>
                                </div>
                                <div className="countdown__amount">
                                    <p className="countdown__period">57</p>
                                    <span className="unit">Mins</span>
                                </div>
                                <div className="countdown__amount">
                                    <p className="countdown__period">28</p>
                                    <span className="unit">Sec</span>
                                </div>
                            </div>
                        </div>
                        <div className="deals__btn">
                            <a href="details.html" className="btn btn--md">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/*=============== NEW ARRIVALS ===============*/}
            <NewArrivals />
            {/*=============== SHOWCASE ===============*/}
            <section className="showcase section">
                <div className="showcase__container container grid">
                    <div className="showcase__wrapper">
                        <h3 className="section__title">Hot Releases</h3>
                        <div className="showcase__item">
                            <a href="details.html" className="showcase__img-box">
                                <img
                                    src="./assets/img/showcase-img-1.jpg"
                                    alt=""
                                    className="showcase__img"
                                />
                            </a>
                            <div className="showcase__content">
                                <a href="details.html">
                                    <h4 className="showcase__title">
                                        Floral Print Casual Cotton Dress
                                    </h4>
                                </a>
                                <div className="showcase__price flex">
                                    <span className="new__price">$238.85</span>
                                    <span className="old__price">$245.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="showcase__item">
                            <a href="details.html" className="showcase__img-box">
                                <img
                                    src="./assets/img/showcase-img-2.jpg"
                                    alt=""
                                    className="showcase__img"
                                />
                            </a>
                            <div className="showcase__content">
                                <a href="details.html">
                                    <h4 className="showcase__title">
                                        Ruffled Solid Long Sleeve Blouse
                                    </h4>
                                </a>
                                <div className="showcase__price flex">
                                    <span className="new__price">$238.85</span>
                                    <span className="old__price">$245.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="showcase__item">
                            <a href="details.html" className="showcase__img-box">
                                <img
                                    src="./assets/img/showcase-img-3.jpg"
                                    alt=""
                                    className="showcase__img"
                                />
                            </a>
                            <div className="showcase__content">
                                <a href="details.html">
                                    <h4 className="showcase__title">
                                        Multi-Color Print V-neck T-shirt
                                    </h4>
                                </a>
                                <div className="showcase__price flex">
                                    <span className="new__price">$238.85</span>
                                    <span className="old__price">$245.8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="showcase__wrapper">
                        <h3 className="section__title">Deals &amp; Outlet</h3>
                        <div className="showcase__item">
                            <a href="details.html" className="showcase__img-box">
                                <img
                                    src="./assets/img/showcase-img-4.jpg"
                                    alt=""
                                    className="showcase__img"
                                />
                            </a>
                            <div className="showcase__content">
                                <a href="details.html">
                                    <h4 className="showcase__title">Fish Print Patched T-shirt</h4>
                                </a>
                                <div className="showcase__price flex">
                                    <span className="new__price">$238.85</span>
                                    <span className="old__price">$245.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="showcase__item">
                            <a href="details.html" className="showcase__img-box">
                                <img
                                    src="./assets/img/showcase-img-5.jpg"
                                    alt=""
                                    className="showcase__img"
                                />
                            </a>
                            <div className="showcase__content">
                                <a href="details.html">
                                    <h4 className="showcase__title">Fintage Floral Print Dress</h4>
                                </a>
                                <div className="showcase__price flex">
                                    <span className="new__price">$238.85</span>
                                    <span className="old__price">$245.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="showcase__item">
                            <a href="details.html" className="showcase__img-box">
                                <img
                                    src="./assets/img/showcase-img-6.jpg"
                                    alt=""
                                    className="showcase__img"
                                />
                            </a>
                            <div className="showcase__content">
                                <a href="details.html">
                                    <h4 className="showcase__title">
                                        Multi-Color Stripe Circle T-shirt
                                    </h4>
                                </a>
                                <div className="showcase__price flex">
                                    <span className="new__price">$238.85</span>
                                    <span className="old__price">$245.8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="showcase__wrapper">
                        <h3 className="section__title">Top Selling</h3>
                        <div className="showcase__item">
                            <a href="details.html" className="showcase__img-box">
                                <img
                                    src="./assets/img/showcase-img-7.jpg"
                                    alt=""
                                    className="showcase__img"
                                />
                            </a>
                            <div className="showcase__content">
                                <a href="details.html">
                                    <h4 className="showcase__title">
                                        Geometric Printed Long Sleeve Blouse
                                    </h4>
                                </a>
                                <div className="showcase__price flex">
                                    <span className="new__price">$238.85</span>
                                    <span className="old__price">$245.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="showcase__item">
                            <a href="details.html" className="showcase__img-box">
                                <img
                                    src="./assets/img/showcase-img-8.jpg"
                                    alt=""
                                    className="showcase__img"
                                />
                            </a>
                            <div className="showcase__content">
                                <a href="details.html">
                                    <h4 className="showcase__title">Print Patchwork Maxi Dress</h4>
                                </a>
                                <div className="showcase__price flex">
                                    <span className="new__price">$238.85</span>
                                    <span className="old__price">$245.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="showcase__item">
                            <a href="details.html" className="showcase__img-box">
                                <img
                                    src="./assets/img/showcase-img-9.jpg"
                                    alt=""
                                    className="showcase__img"
                                />
                            </a>
                            <div className="showcase__content">
                                <a href="details.html">
                                    <h4 className="showcase__title">
                                        Daisy Floral Print Straps Jumpsuit
                                    </h4>
                                </a>
                                <div className="showcase__price flex">
                                    <span className="new__price">$238.85</span>
                                    <span className="old__price">$245.8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="showcase__wrapper">
                        <h3 className="section__title">Trendy</h3>
                        <div className="showcase__item">
                            <a href="details.html" className="showcase__img-box">
                                <img
                                    src="./assets/img/showcase-img-7.jpg"
                                    alt=""
                                    className="showcase__img"
                                />
                            </a>
                            <div className="showcase__content">
                                <a href="details.html">
                                    <h4 className="showcase__title">Floral Print Casual Cotton</h4>
                                </a>
                                <div className="showcase__price flex">
                                    <span className="new__price">$238.85</span>
                                    <span className="old__price">$245.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="showcase__item">
                            <a href="details.html" className="showcase__img-box">
                                <img
                                    src="./assets/img/showcase-img-8.jpg"
                                    alt=""
                                    className="showcase__img"
                                />
                            </a>
                            <div className="showcase__content">
                                <a href="details.html">
                                    <h4 className="showcase__title">Ruffled Solid Long Sleeve</h4>
                                </a>
                                <div className="showcase__price flex">
                                    <span className="new__price">$238.85</span>
                                    <span className="old__price">$245.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="showcase__item">
                            <a href="details.html" className="showcase__img-box">
                                <img
                                    src="./assets/img/showcase-img-9.jpg"
                                    alt=""
                                    className="showcase__img"
                                />
                            </a>
                            <div className="showcase__content">
                                <a href="details.html">
                                    <h4 className="showcase__title">Multi-Color Print V-neck</h4>
                                </a>
                                <div className="showcase__price flex">
                                    <span className="new__price">$238.85</span>
                                    <span className="old__price">$245.8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*=============== NEWSLETTER ===============*/}
            <section className="newsletter section home__newsletter">
                <div className="newsletter__container container grid">
                    <h3 className="newsletter__title flex">
                        <img
                            src="./assets/img/icon-email.svg"
                            alt=""
                            className="newsletter__icon"
                        />
                        Sign in to Newsletter
                    </h3>
                    <p className="newsletter__description">
                        ...and receive $25 coupon for first shopping.
                    </p>
                    <form action="" className="newsletter__form">
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="newsletter__input"
                        />
                        <button type="submit" className="newsletter__btn">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </main>
    </>
}
export default Home
