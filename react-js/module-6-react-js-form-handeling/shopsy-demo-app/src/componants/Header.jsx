import React from 'react'
import { useState } from 'react'
export default function Header() {
    // Modal Login Form 
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <header className="bg-white shadow sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
                    {/* Logo */}
                    <h1 className="text-4xl font-bold text-indigo-600">shopsy</h1>
                    {/* Search */}
                    <div className="hidden md:flex flex-1 relative">
                        <i className="fa fa-search absolute ml-5 top-1/2 -translate-y-1/2 text-gray-500 bg-gray-100" />
                        <input
                            type="text"
                            placeholder=" Search for Products, Brands and More"
                            className="w-full px-4 py-2 ml-10 rounded-lg bg-gray-100 focus:outline-none"
                        />
                    </div>
                    {/* Right */}
                    <div className="flex items-center gap-6 text-md">
                        <button onClick={() => setShowLogin(true)} className="flex items-center gap-2 hover:text-indigo-600">
                            <i className="fa-regular fa-user" /> Login
                        </button>

                        {showLogin && (
                            <div className="fixed inset-0 bg-gray-200/50 flex items-center justify-center">
                                <div className="bg-white w-[600px] rounded-lg flex relative ">
                                    <button className='absolute top-2 right-2 p-2 text-gray-500 hover:text-black text-xl'
                                        onClick={() => setShowLogin(false)}>✕</button>

                                    <div className="bg-[linear-gradient(133deg,rgb(100,93,225)_-3.69%,rgb(40,116,240)_121.97%)] p-6 text-white w-1/3 p-6">
                                        <h2 className="text-2xl font-bold">Login</h2>
                                        <p className='text-sm font-[Inter,Inter-fallback,sans-serif]'>Get access your Orders Wishlist and Recommendations</p>
                                    </div>
                                    {/* md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full z-10 */}
                                    <div className="w-2/3 p-6 ">
                                        <h3 className='text:md'>Welcome!</h3>
                                        <p className='text-sm text-gray-500'>Enter your mobile number to start shopping.</p>

                                        <div className="border mt-5 rounded-md items-center w-full max-w-md">                                          
                                            {/* Input */}
                                            <input
                                                type="text"
                                                placeholder="Phone Number"
                                                className="flex-1 p-2 outline-none"
                                            />                                                                                    
                                        </div>                                        
                                        <p className='mt-10 text-xs text-gray-400'>By continuing, I agree to the Terms Use and Privacy Policy</p>
                                        <button className='w-full bg-gray-400 text-white px-6 py-2 rounded-full mt-30'>Continue</button>                                                 
                                    </div>                                    
                                </div>                                
                            </div>
                        )}

                        {/* Cart */}
                        <button className="flex items-center gap-2 hover:text-indigo-600 ml-5">
                            <i className="fa-solid fa-cart-shopping" /> Cart
                        </button>
                        {/* Seller */}
                        <button className="hidden md:flex items-center gap-2 hover:text-indigo-600 ml-5">
                            <i className="fa-solid fa-store" /> Become a Seller
                        </button>
                        {/* Dropdown */}
                        <div className="relative group ml-5">
                            <button className="text-xl">⋮</button>
                            <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md hidden group-hover:block">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Customer Care
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Download App
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Search */}
                <div className="md:hidden px-4 pb-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none"
                    />
                </div>
            </header>
        </>
    )
}
