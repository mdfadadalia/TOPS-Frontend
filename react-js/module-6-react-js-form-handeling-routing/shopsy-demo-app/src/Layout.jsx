import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './componants/Header';
import Footer from './componants/Footer';
import Content from './componants/Content';
import DispItems from './componants/pages/DispItems';
import NotFound from './componants/pages/error404';

export default function Layout() {
  return (
    <BrowserRouter basename="/shopsy-demo-app">
      <div className="bg-gray-100 font-[Inter,Inter-fallback,sans-serif]">
        
        <Header />

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/DispItems/:catnm" element={<DispItems />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}