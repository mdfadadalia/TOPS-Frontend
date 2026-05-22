import React from 'react'
import { useRef } from "react";
import { Link } from 'react-router-dom';
export default function Content() 
{        
    // Scrollbar Control START
    const containerRef = useRef(null);
    const scrollLeft = () => {
        containerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
        });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
        });
    };
// Scrollbar Control END
    return (
        <>            
                {/* ================= CATEGORY SCROLL ================= */}
                <section className="max-w-7xl mx-auto bg-white px-4 py-4 relative">
                    {/* LEFT ARROW */}
                    <button onClick={scrollLeft}                        
                        className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full z-10"
                    >
                        ❮
                    </button>

                    {/* CATEGORY SCROLL */}
                    <div                        
                        ref={containerRef}
                        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth text-center text-xs md:text-sm"
                    >
                        {/* ITEM */}
                        <Link to="/DispItems/Women">
                            <div className="min-w-[70px] md:min-w-[90px]">
                                <img
                                    src="https://rukminim3.flixcart.com/www/64/64/promos/27/05/2024/16d096e4-3425-4e2e-9781-6fb1ece1f3d7.jpg"
                                    className="mx-auto rounded-full w-12 h-12 md:w-14 md:h-14 object-cover"
                                />
                                <p className="mt-1">Women</p>
                            </div>
                        </Link>
                        <Link to="/DispItems/Men">
                            <div className="min-w-[70px] md:min-w-[90px]">
                                <img
                                    src="https://rukminim3.flixcart.com/www/64/64/promos/27/05/2024/9cd2872b-11ac-488d-ab4b-7d65d98b4c74.jpg"
                                    className="mx-auto rounded-full w-12 h-12 md:w-14 md:h-14"
                                />
                                <p className="mt-1">Men</p>
                            </div>
                        </Link>
                        <Link to="/DispItems/Kids">
                            <div className="min-w-[70px] md:min-w-[90px]">
                                <img
                                    src="https://rukminim3.flixcart.com/www/64/64/promos/27/05/2024/3ada2633-c930-4df4-8cc8-f21a9a4d54d1.jpg"
                                    className="mx-auto rounded-full w-12 h-12 md:w-14 md:h-14"
                                />
                                <p className="mt-1">Kids</p>
                            </div>
                        </Link>
                        <Link to="/DispItems/Footwear">
                            <div className="min-w-[70px] md:min-w-[90px]">
                                <img
                                    src="https://rukminim3.flixcart.com/www/64/64/promos/27/05/2024/da193762-44de-4814-baf8-bfaf961e2430.jpg"
                                    className="mx-auto rounded-full w-12 h-12 md:w-14 md:h-14"
                                />
                                <p className="mt-1">Footwear</p>
                            </div>
                        </Link>
                        <Link to="/DispItems/Beauty">
                            <div className="min-w-[90px]">
                                <img
                                    src="https://rukminim3.flixcart.com/www/64/64/promos/09/07/2024/f13ffe75-154c-4162-866b-ffb6e54ee94c.jpg"
                                    className="mx-auto rounded-full w-12 h-12 md:w-14 md:h-14"
                                />
                                <p className="mt-1">Beauty</p>
                            </div>
                        </Link>
                        <Link to="/DispItems/Accessories">
                            <div className="min-w-[90px]">
                                <img
                                    src="https://rukminim3.flixcart.com/www/64/64/promos/09/07/2024/47710dbe-a3b2-4b4a-8862-9b4ec185ac11.jpg"
                                    className="mx-auto rounded-full w-12 h-12 md:w-14 md:h-14"
                                />
                                <p className="mt-1">Accessories</p>
                            </div>
                        </Link>
                        <Link to="/DispItems/HomeDecor">
                            <div className="min-w-[90px]">
                                <img
                                    src="https://rukminim3.flixcart.com/www/64/64/promos/27/05/2024/740c4a58-75f0-43cf-8d97-8c86f37644a2.jpg"
                                    className="mx-auto rounded-full w-12 h-12 md:w-14 md:h-14"
                                />
                                <p className="mt-1">Home Decor</p>
                            </div>
                        </Link>
                        <Link to="/DispItems/Furnishing">
                            <div className="min-w-[90px]">
                                <img
                                    src="https://rukminim3.flixcart.com/www/64/64/promos/27/05/2024/86e54f01-0183-4573-9a36-1182ccfcf27e.jpg"
                                    className="mx-auto rounded-full w-12 h-12 md:w-14 md:h-14"
                                />
                                <p className="mt-1">Furnishing</p>
                            </div>
                        </Link>
                        <Link to="/DispItems/Kitchen">
                            <div className="min-w-[90px]">
                                <img
                                    src="https://rukminim3.flixcart.com/www/64/64/promos/09/07/2024/4ace4a0f-53b2-4f2a-b5bf-da65d7fe3263.jpg"
                                    className="mx-auto rounded-full w-12 h-12 md:w-14 md:h-14"
                                />
                                <p className="mt-1">Kitchen</p>
                            </div>
                        </Link>
                        <Link to="/DispItems/BeautyWellness">
                            <div className="min-w-[80px]">
                                <img
                                    src="https://rukminim3.flixcart.com/www/64/64/promos/09/07/2024/f13ffe75-154c-4162-866b-ffb6e54ee94c.jpg?q=60"
                                    className="mx-auto rounded-full w-12 h-12 md:w-14 md:h-14"
                                />
                                <p>Beauty Wellness &amp; More</p>
                            </div>
                        </Link>
                        <Link to="/DispItems/AccessoriesMore">
                            <div className="min-w-[80px]">
                                <img
                                    src="https://rukminim3.flixcart.com/www/64/64/promos/09/07/2024/47710dbe-a3b2-4b4a-8862-9b4ec185ac11.jpg?q=60"
                                    className="mx-auto rounded-full w-12 h-12 md:w-14 md:h-14"
                                />
                                <p>Accessories &amp; more</p>
                            </div>
                        </Link>
                        <Link to="/DispItems/SportsHealthFitness">
                            <div className="min-w-[80px]">
                                <img
                                    src="https://rukminim3.flixcart.com/www/64/64/promos/09/07/2024/a8ac02c8-0118-45b6-ab05-90a959f9e9dd.jpg?q=60"
                                    className="mx-auto rounded-full w-12 h-12 md:w-14 md:h-14"
                                />
                                <p>Sports, Health &amp; Fitness</p>
                            </div>
                        </Link>
                        <Link to="/DispItems/ToysStationary">
                            <div className="min-w-[80px]">
                                <img
                                    src="https://rukminim3.flixcart.com/www/64/64/promos/27/05/2024/1f402fea-8ce1-4c4c-80a3-a849448441bd.jpg?q=60"
                                    className="mx-auto rounded-full w-12 h-12 md:w-14 md:h-14"
                                />
                                <p>Toys &amp; Stationary</p>
                            </div>
                        </Link>
                        <Link to="/DispItems/ToysStationary">
                            <div className="min-w-[80px]">
                                <img
                                    src="https://rukminim3.flixcart.com/www/64/64/promos/27/05/2024/1f402fea-8ce1-4c4c-80a3-a849448441bd.jpg?q=60"
                                    className="mx-auto rounded-full w-12 h-12 md:w-14 md:h-14"
                                />
                                <p>Toys &amp; Stationary</p>
                            </div>
                        </Link>
                    <button
                        onClick={scrollRight}
                        className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full z-10"
                    >
                        ❯
                    </button>
                    </div>
                </section>
                {/* ================= TOP BANNER ================= */}
                <section className="max-w-7xl mx-auto px-4 mt-4">
                    <img src="https://rukminim3.flixcart.com/fk-p-flap/2000/173/image/fe8aef563bbd1231.jpg?q=60" />
                </section>
                {/* ================= TITLE ================= */}
                <section className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6">
                    <img src="https://rukminim3.flixcart.com/fk-p-flap/2000/288/image/41fc5c22a3d4101c.jpg?q=60" />
                </section>
                {/* ================= CARDS ================= */}
                <section className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                        {/* CARD */}
                        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer">
                            <img
                                src="https://rukminim3.flixcart.com/fk-p-flap/886/475/image/a83ed71a398dd369.jpg?q=60"
                                className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition"
                            />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer">
                            <img
                                src="https://rukminim3.flixcart.com/fk-p-flap/886/475/image/cbc6ada3c39fbf74.jpg?q=60"
                                className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition"
                            />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer">
                            <img
                                src="https://rukminim3.flixcart.com/fk-p-flap/886/475/image/1bcba2663e42a604.jpg?q=60"
                                className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition"
                            />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer">
                            <img
                                src="https://rukminim3.flixcart.com/fk-p-flap/886/475/image/e4229e10550365bb.jpg?q=60"
                                className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition"
                            />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer">
                            <img
                                src="https://rukminim3.flixcart.com/fk-p-flap/886/475/image/fdccf615498b9a78.jpg?q=60"
                                className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition"
                            />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer">
                            <img
                                src="https://rukminim3.flixcart.com/fk-p-flap/886/475/image/5986f9052407b467.jpg?q=60"
                                className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition"
                            />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer">
                            <img
                                src="https://rukminim3.flixcart.com/fk-p-flap/886/475/image/1c995ad1b1cd6b90.jpg?q=60"
                                className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition"
                            />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer">
                            <img
                                src="https://rukminim3.flixcart.com/fk-p-flap/886/475/image/fd51d9457074073f.jpg?q=60"
                                className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition"
                            />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer">
                            <img
                                src="https://rukminim3.flixcart.com/fk-p-flap/886/475/image/2284f047d0805d07.jpg?q=60"
                                className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition"
                            />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer">
                            <img
                                src="https://rukminim3.flixcart.com/fk-p-flap/886/475/image/4e91e38e1a7d93e8.jpg?q=60"
                                className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition"
                            />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer">
                            <img
                                src="https://rukminim3.flixcart.com/fk-p-flap/886/475/image/ff7fd9af80515ff0.jpg?q=60"
                                className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition"
                            />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer">
                            <img
                                src="https://rukminim3.flixcart.com/fk-p-flap/886/475/image/b7b31d9f5137d18f.jpg?q=60"
                                className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition"
                            />
                        </div>
                    </div>
                </section>
                {/* Section */}
                <section className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6">
                    <img src="https://rukminim3.flixcart.com/fk-p-flap/2000/288/image/74512bd4be24ba3e.png?q=60" />
                </section>
                <section className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {/* CARD */}
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                            <div className="aspect-[683/279] bg-gray-50 flex items-center justify-center">
                                <img
                                    src="https://rukminim3.flixcart.com/fk-p-flap/683/279/image/90907f1c2c06e6f9.png?q=60"
                                    className="w-full h-full object-contain hover:scale-105 transition duration-300"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                            <div className="aspect-[683/279] bg-gray-50 flex items-center justify-center">
                                <img
                                    src="https://rukminim3.flixcart.com/fk-p-flap/683/279/image/df404e174121f073.png?q=60"
                                    className="w-full h-full object-contain hover:scale-105 transition"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                            <div className="aspect-[683/279] bg-gray-50 flex items-center justify-center">
                                <img
                                    src="https://rukminim3.flixcart.com/fk-p-flap/683/279/image/8b4a70d6897c4430.png?q=60"
                                    className="w-full h-full object-contain hover:scale-105 transition"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                            <div className="aspect-[683/279] bg-gray-50 flex items-center justify-center">
                                <img
                                    src="https://rukminim3.flixcart.com/fk-p-flap/683/279/image/38b9372cd3972ae9.png?q=60"
                                    className="w-full h-full object-contain hover:scale-105 transition"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                            <div className="aspect-[683/279] bg-gray-50 flex items-center justify-center">
                                <img
                                    src="https://rukminim3.flixcart.com/fk-p-flap/683/279/image/90907f1c2c06e6f9.png?q=60"
                                    className="w-full h-full object-contain hover:scale-105 transition duration-300"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                            <div className="aspect-[683/279] bg-gray-50 flex items-center justify-center">
                                <img
                                    src="https://rukminim3.flixcart.com/fk-p-flap/683/279/image/df404e174121f073.png?q=60"
                                    className="w-full h-full object-contain hover:scale-105 transition"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                            <div className="aspect-[683/279] bg-gray-50 flex items-center justify-center">
                                <img
                                    src="https://rukminim3.flixcart.com/fk-p-flap/683/279/image/8b4a70d6897c4430.png?q=60"
                                    className="w-full h-full object-contain hover:scale-105 transition"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                            <div className="aspect-[683/279] bg-gray-50 flex items-center justify-center">
                                <img
                                    src="https://rukminim3.flixcart.com/fk-p-flap/683/279/image/38b9372cd3972ae9.png?q=60"
                                    className="w-full h-full object-contain hover:scale-105 transition"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                            <div className="aspect-[683/279] bg-gray-50 flex items-center justify-center">
                                <img
                                    src="https://rukminim3.flixcart.com/fk-p-flap/683/279/image/90907f1c2c06e6f9.png?q=60"
                                    className="w-full h-full object-contain hover:scale-105 transition duration-300"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                            <div className="aspect-[683/279] bg-gray-50 flex items-center justify-center">
                                <img
                                    src="https://rukminim3.flixcart.com/fk-p-flap/683/279/image/df404e174121f073.png?q=60"
                                    className="w-full h-full object-contain hover:scale-105 transition"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                            <div className="aspect-[683/279] bg-gray-50 flex items-center justify-center">
                                <img
                                    src="https://rukminim3.flixcart.com/fk-p-flap/683/279/image/8b4a70d6897c4430.png?q=60"
                                    className="w-full h-full object-contain hover:scale-105 transition"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                            <div className="aspect-[683/279] bg-gray-50 flex items-center justify-center">
                                <img
                                    src="https://rukminim3.flixcart.com/fk-p-flap/683/279/image/38b9372cd3972ae9.png?q=60"
                                    className="w-full h-full object-contain hover:scale-105 transition"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-7xl mx-auto px-4 py-6">
                    {/* Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {/* Product Card */}
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group">
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src="https://rukminim3.flixcart.com/image/659/820/xif0q/shopsy-pendant-locket/d/4/8/na-na-ethnic-hanuman-silver-locket-with-oxidised-silver-chain-p-original-imahknuyxafpbdbh.jpeg?q=60&crop=false"
                                    className="w-full h-100 object-cover group-hover:scale-105 transition duration-300"
                                />
                                {/* Rating */}
                                <span className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                    4.1 ★
                                </span>
                            </div>
                            {/* Content */}
                            <div className="p-3">
                                <p className="text-sm text-gray-700 line-clamp-2">
                                    Hanuman Silver Locket With Chain Stylish Design
                                </p>
                                <div className="mt-2 flex items-center gap-2 text-sm">
                                    <span className="text-green-600 font-semibold">89% off</span>
                                    <span className="line-through text-gray-400">₹399</span>
                                    <span className="font-bold text-gray-900">₹41</span>
                                </div>
                                <p className="text-xs text-blue-600 mt-1">Bestseller</p>
                            </div>
                        </div>
                        {/* Repeat Cards */}
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img
                                    src="https://rukminim3.flixcart.com/image/659/820/xif0q/shopsy-pendant-locket/x/i/d/na-na-ethnic-sr2121-07-rparwey-original-imahknuyebaz6rvf.jpeg?q=60&crop=false"
                                    className="w-full h-100 object-cover group-hover:scale-105 transition"
                                />
                                <span className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                    3.8 ★
                                </span>
                            </div>
                            <div className="p-3">
                                <p className="text-sm text-gray-700">Stainless Steel Chain Pendant</p>
                                <div className="mt-2 flex gap-2 text-sm">
                                    <span className="text-green-600 font-semibold">91% off</span>
                                    <span className="line-through text-gray-400">₹540</span>
                                    <span className="font-bold">₹48</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img
                                    src="https://rukminim3.flixcart.com/image/659/820/xif0q/pendant-locket/w/o/8/na-na-2724-omaya-jewels-enriched-0-original-imahf95qbfb5zzea.jpeg?q=60&crop=false"
                                    className="w-full h-100 object-cover group-hover:scale-105 transition"
                                />
                                <span className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                    3.8 ★
                                </span>
                            </div>
                            <div className="p-3">
                                <p className="text-sm text-gray-700">Square Stone Pendant</p>
                                <div className="mt-2 flex gap-2 text-sm">
                                    <span className="text-green-600 font-semibold">90% off</span>
                                    <span className="line-through text-gray-400">₹439</span>
                                    <span className="font-bold">₹42</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img
                                    src="https://rukminim3.flixcart.com/image/659/820/l186t8w0/shopsy-painting/w/y/g/18-3-sndjma97-sndart-original-imagcumthqzzwhpn.jpeg?q=60&crop=false"
                                    className="w-full h-100 object-cover group-hover:scale-105 transition"
                                />
                                <span className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                    4.0 ★
                                </span>
                            </div>
                            <div className="p-3">
                                <p className="text-sm text-gray-700">Radha Krishna Wall Decor</p>
                                <div className="mt-2 flex gap-2 text-sm">
                                    <span className="text-green-600 font-semibold">89% off</span>
                                    <span className="line-through text-gray-400">₹599</span>
                                    <span className="font-bold">₹65</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img
                                    src="https://rukminim3.flixcart.com/image/659/820/xif0q/shopsy-jewellery-set/z/d/n/-original-imahhrsk8cnwfffu.jpeg?q=60&crop=false"
                                    className="w-full h-100 object-cover group-hover:scale-105 transition"
                                />
                                <span className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                    4.0 ★
                                </span>
                            </div>
                            <div className="p-3">
                                <p className="text-sm text-gray-700">Radha Krishna Wall Decor</p>
                                <div className="mt-2 flex gap-2 text-sm">
                                    <span className="text-green-600 font-semibold">89% off</span>
                                    <span className="line-through text-gray-400">₹599</span>
                                    <span className="font-bold">₹65</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img
                                    src="https://rukminim3.flixcart.com/image/659/820/xif0q/shopsy-pendant-locket/l/i/r/na-na-contemporary-couple-locket-for-him-her-daily-wear-love-original-imahyfbamw5xgzma.jpeg?q=60&crop=false"
                                    className="w-full h-100 object-cover group-hover:scale-105 transition"
                                />
                                <span className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                    4.0 ★
                                </span>
                            </div>
                            <div className="p-3">
                                <p className="text-sm text-gray-700">Radha Krishna Wall Decor</p>
                                <div className="mt-2 flex gap-2 text-sm">
                                    <span className="text-green-600 font-semibold">89% off</span>
                                    <span className="line-through text-gray-400">₹599</span>
                                    <span className="font-bold">₹65</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img
                                    src="https://rukminim3.flixcart.com/image/659/820/xif0q/shopsy-painting/3/j/9/9-1-crystal-9x12-7558s-wallmax-original-imahfjz6ckrcpngy.jpeg?q=60&crop=false"
                                    className="w-full h-100 object-cover group-hover:scale-105 transition"
                                />
                                <span className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                    4.0 ★
                                </span>
                            </div>
                            <div className="p-3">
                                <p className="text-sm text-gray-700">Radha Krishna Wall Decor</p>
                                <div className="mt-2 flex gap-2 text-sm">
                                    <span className="text-green-600 font-semibold">89% off</span>
                                    <span className="line-through text-gray-400">₹599</span>
                                    <span className="font-bold">₹65</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img
                                    src="https://rukminim3.flixcart.com/image/659/820/xif0q/shopsy-duffel-bag/l/q/e/10l-women-duffle-handbag-travel-bag-light-duffle-handbag-maroon-enriched-0-original-imagyhwybygtjr3z.jpeg?q=60&crop=false"
                                    className="w-full h-100 object-cover group-hover:scale-105 transition"
                                />
                                <span className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                    4.0 ★
                                </span>
                            </div>
                            <div className="p-3">
                                <p className="text-sm text-gray-700">Radha Krishna Wall Decor</p>
                                <div className="mt-2 flex gap-2 text-sm">
                                    <span className="text-green-600 font-semibold">89% off</span>
                                    <span className="line-through text-gray-400">₹599</span>
                                    <span className="font-bold">₹65</span>
                                </div>
                            </div>
                        </div>
                        {/* Add more cards as needed */}
                    </div>
                </section>
            </>

    )
}
