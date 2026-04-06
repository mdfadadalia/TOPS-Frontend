import React from 'react'

export default function Header() {
  return (
    <>    
        <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-green-600">Fruitables</h1>

            <nav className="hidden md:flex gap-6">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Cart</a>
            <a href="#">Contact</a>
            </nav>

            <div className="flex gap-4">
            <i className="fas fa-search"></i>
            <i className="fas fa-shopping-bag"></i>
            <i className="fas fa-user"></i>
            </div>
        </div>
        </header>  
    </>
  )
}
