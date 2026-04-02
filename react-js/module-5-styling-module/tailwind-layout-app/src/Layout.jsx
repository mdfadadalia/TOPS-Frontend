import React from 'react'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'
export default function Layout() {
  return (
    <div>
        <Header />
        <div className="flex">0
        <Content />1
        <Content />2
        </div>
        <Footer />
      
    </div>
  )
}