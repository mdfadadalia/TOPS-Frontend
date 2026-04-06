import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-gray-300">
                {/* Top Section */}
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
                    {/* About */}
                    <div>
                        <h3 className="text-gray-400 mb-3 uppercase text-xs">About</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">Contact Us</li>
                            <li className="hover:text-white cursor-pointer">Careers</li>
                        </ul>
                    </div>
                    {/* Help */}
                    <div>
                        <h3 className="text-gray-400 mb-3 uppercase text-xs">Help</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-white">Payments</li>
                            <li className="hover:text-white">Shipping</li>
                            <li className="hover:text-white">Cancellation &amp; Returns</li>
                            <li className="hover:text-white">FAQ</li>
                        </ul>
                    </div>
                    {/* Policy */}
                    <div>
                        <h3 className="text-gray-400 mb-3 uppercase text-xs">Consumer Policy</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-white">Terms Of Use</li>
                            <li className="hover:text-white">Privacy</li>
                            <li className="hover:text-white">Sitemap</li>
                            <li className="hover:text-white">Grievance Redressal</li>
                            <li className="hover:text-white">EPR Compliance</li>
                        </ul>
                    </div>
                    {/* Social */}
                    <div>
                        <h3 className="text-gray-400 mb-3 uppercase text-xs">Social</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-white">Facebook</li>
                            <li className="hover:text-white">Instagram</li>
                            <li className="hover:text-white">Twitter</li>
                            <li className="hover:text-white">YouTube</li>
                        </ul>
                    </div>
                    {/* Address */}
                    <div className="col-span-2 md:col-span-1 border-t md:border-t-0 md:border-l border-gray-700 pt-6 md:pt-0 md:pl-6">
                        <h3 className="text-gray-400 mb-3 uppercase text-xs">Mail Us:</h3>
                        <p className="text-xs leading-5">
                            Flipkart Internet Private Limited,
                            <br />
                            Buildings Alyssa, Begonia &amp;
                            <br />
                            Clove Embassy Tech Village,
                            <br />
                            Outer Ring Road, Bengaluru,
                            <br />
                            Karnataka, India
                        </p>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="border-t border-gray-700">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                        {/* Left */}
                        <div className="flex flex-wrap items-center gap-6">
                            <span className="hover:text-white cursor-pointer">Become a Seller</span>
                            <span className="hover:text-white cursor-pointer">Help Center</span>
                            <span>© 2020–2026 Shopsy.in</span>
                        </div>
                        {/* Payment Icons */}
                        <div className="flex items-center gap-2">
                            <img
                                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
                                className="h-6"
                            />
                        </div>
                    </div>
                </div>
            </footer>
            
        </>
    )
}
