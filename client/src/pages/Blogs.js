import React, { lazy, Suspense, useEffect } from "react";
import Loader from "../components/Loader/Loader";
const Nav = lazy(() => import("../components/Navbar/Nav"));
const Footer = lazy(() => import("../components/Footer/Footer"));
const Pagination = lazy(() => import("../components/Pagination/Pagination.js"));
const Card = lazy(() => import("../components/Blogs/Card"));
const Hero = lazy(() => import("../components/Blogs/Hero"));
function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <Nav />
      <div style={{ width: "90%", margin: "0 auto" }}>
        <Hero />
        <Card />
        <Pagination />
      </div>
      <Footer />
    </Suspense>
  );
}

export default Blogs;
