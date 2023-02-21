import React from "react";
import { Routes, Route} from "react-router-dom";
import Blog from "../pages/Pageslar/Blog";
import Detalis from "../pages/Pageslar/Detalis";
import ChecOut from "../pages/Pageslar/Checaut";
import Shopcard from "../pages/Pageslar/ShoppingCard";
import Contact from "../pages/Contact";


const Router = () => {
  return (
    <Routes>

       <Route path="/blog" element={<Blog />} />
       <Route path="/detalis" element={<Detalis />} />
       <Route path="/checout" element={<ChecOut />} />
       <Route path="/shopcard" element={<Shopcard />} />
       <Route path="/contact" element={<Contact />} />

 


    </Routes>
  );
};

export default Router;
